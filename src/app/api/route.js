import dayjs from "dayjs";
import { NextResponse } from "next/server";
const { google } = require("googleapis");
// Provide the required configuration
const calendarId =
  "7a50fbffa5e40e9517ab0a7b945f11d3da2013b18049e9b75b7337917d342a93@group.calendar.google.com";
// Google calendar API settings
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

const auth = new google.auth.JWT(
  "test-email@calendar-api-405919.iam.gserviceaccount.com",
  null,
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj4GGQFhuCWIXQ\nOUq7W6aS946FFtnxDFB4R3DflsKphwHEn0udQt2OhEIItZicYRPpiuYQnEt/1NnS\nUV4NpqUm4k0lI1qVq8RNt76H4gW03+y+WsIG2oeEfotipJkDBOJf1xl2DZ6pocxm\nsrmwf5cC9MPXu74oa3gUSQlOHF4g+K7O7kAq6M485/Emeah5K2o5/4DHtWVsgRG1\nOsqgh/ZmrLj+HnRBBhpDe+2cLyOI9n6q4OScd63TANejbOGlF067rMbLJaZm30pX\nUZ5iEMMNYOOzwArUeaOuja9dUj1/bAcW5mefag222Ogupit6Jsl7k3lqrWo0oWJO\nYviTf8KlAgMBAAECggEAAfhafpTZA5hC2cwb3OSLg1dAHijSubYlaRIazWVV0f9E\nEWXaMogjJffOovsOlTAJlnf2PamMQQm6KYyTUatcb16uq9uEZSnNJgbueyFHuA+D\nVTi94YYZ7lAt0Xj/G7RLcGpqmA5narA2uMI9hl2SURWPHaD0vbxTPj3a/HMU24G1\nziiBOKt4UNq5qBOCgNjsCEP6lDALcI6NueJkqske3F39qrZgjyOVxL67COtoqtrD\nEn6xLQsD+xwzyqZvm5W4JufWN58WkZ3vW1WUFVxGg6xNxW8dhWZd5tpTUcXn4gq5\nX4MRE9czJr589MbvBW8E9vr7YcOJ/Gt6eXdl4O+ixQKBgQDgoSH1h13JIRIkb9ZI\newQ8KGTPCUulBTh6avAaA54FEzitNZSB95B+pbis13iYr/p6r6leg3EB9KJgadE7\ne1zwAvgdJC3DCOKkHwsoKAW6DrvL4MRu5n/x9CGCXo58QZJ0RpO19m29yG+hMZmY\nbvoOor0ZWqdC5kpDCeY72e63TwKBgQC6wztvVYS07cqomohmH1ZL1AKuzTFfdFGP\nh8VdvJJ5Tv0dWmnDcHBd9HZRmOvkHV3gQ9vSuGQGDAPF50HjPbHKf/T0663/XrCN\n+uL5HeAKx8rtmQDuQWhbhGmFO5iCCzfPPoIVw+ZdYScOHRuDlLXljk3KpXnxKo6A\nQXXEBGtpywKBgQCsu7u9buazr3agBlAlVFOhXv6GJoPA1g7kNC+GEZoGFQ3URAt7\nFcBLY2xrnRXjdA+NIF+BilnwQwpKUZTPxMFm3yGkZxm5jK+bvTN7Iauls4a99I2Z\nKi7hA/Zwpf2zl0jjmRIlLuactfEBZ37RNSWc84+uW4ObcjNQ8d/VznQ/CQKBgC+1\nzCsm553o2Uq1H38nJj58zKqnFKPT7ToDbzIBCFIhEZw8CqS4xpvZ5Zf2vtwpfF/c\nNf3gyPyaeSRHbZeFnTOj+InQ40RHhkbe/rixHxjh7T9BRPGYl/Y5H1O/47fk8b7p\nswWoY+Ma/IUofmzgwo8ACXNpTnuDaZ/uGQ2YK3B9AoGBAIpWfUOMyQ7Yzm9nSt6n\niHINwNoUbPOpUEBr78EJ9WYeCPenkNx8RJo5AyzXqMS3j7KeNog1/rglhA4UVozX\nDi/78pWeP7B71JmRcx7tMQ54+q8zX5xAysjSjiXW/z3Gb2DSxmL2JNJN3/t2w3hl\nJf0Irt+cy06Lm8qbueLHyBPs\n-----END PRIVATE KEY-----\n",
  SCOPES
);

export async function POST(request) {
  const calendar = google.calendar({ version: "v3" });
  try {
    const res = await request.json();
    const response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      resource: {
        summary: res.name,
        location:
          "MARKAS,  Jl. Sidosermo II No.106f, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239",
        description: "Booking Ruangan di Markas",
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
    });

    if (response["status"] == 200 && response["statusText"] === "OK") {
      return NextResponse.json({ link: response?.data?.htmlLink });
    }
  } catch (error) {
    console.log(`Error at insertEvent --> ${error}`);
    return NextResponse.json({ res: error });
  }
}
