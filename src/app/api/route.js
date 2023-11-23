import dayjs from "dayjs";
import { NextResponse } from "next/server";
const { google } = require("googleapis");
// Provide the required configuration
const calendarId = process.env.CALENDAR_ID;
// Google calendar API settings
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

const auth = new google.auth.JWT(
  process.env.MAIL_SECRET,
  null,
  process.env.SERVICE_SECRET.split(String.raw`\n`).join("\n"),
  SCOPES
);

export async function POST(request) {
  const calendar = google.calendar({ version: "v3" });
  try {
    const res = await request.json();
    const response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      anyoneCanAddSelf: true,
      guestsCanInviteOthers: true,
      resource: {
        summary: res.name,
        location:
          "MARKAS,  Jl. Sidosermo II No.106f, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239",
        description: res.type + "-" + res.desc || "Booking Ruangan di Markas",
        visibility: "public",
        start: {
          dateTime: res.date,
          timeZone: "Asia/Jakarta",
        },
        end: {
          dateTime: dayjs(res.date)
            .add(2, "hour")
            .format("YYYY-MM-DDTHH:mm:ss"),
          timeZone: "Asia/Jakarta",
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    });

    if (response["status"] == 200 && response["statusText"] === "OK") {
      // Function to get the value of a specific parameter from a URL
      function getParameterValue(url, parameterName) {
        var queryString = url.split("?")[1];
        if (queryString) {
          var params = new URLSearchParams(queryString);
          return params.get(parameterName);
        }
        return null;
      }

      // Get the value of the 'eid' parameter from the URL
      var eidValue = getParameterValue(response?.data?.htmlLink, "eid");
      return NextResponse.json({
        link: `https://calendar.google.com/event?action=TEMPLATE&tmeid=${eidValue}&tmsrc=${calendarId}`,
      });
    }
  } catch (error) {
    console.log(`Error at insertEvent --> ${error}`);
    return NextResponse.json({ res: error });
  }
}

export async function GET() {
  const calendar = google.calendar({ version: "v3" });
  try {
    let response = await calendar.events.list({
      auth: auth,
      calendarId: calendarId,
    });

    let items = response["data"]["items"];
    return NextResponse.json({ items });
  } catch (error) {
    console.log(`Error at getEvents --> ${error}`);
    return NextResponse.json({ res: error });
  }
}
