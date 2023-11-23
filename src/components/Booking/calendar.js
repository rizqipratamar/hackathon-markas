"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import calendar from "calendar-js";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";

const MAP_DATA = [
  {
    rangeText: "12.00 - 14.00",
    startTime: "T12:00:00",
    endTime: "T14:00:00",
  },
  {
    rangeText: "14.00 - 16.00",
    startTime: "T14:00:00",
    endTime: "T16:00:00",
  },
  {
    rangeText: "16.00 - 18.00",
    startTime: "T16:00:00",
    endTime: "T18:00:00",
  },
  {
    rangeText: "18.00 - 20.00",
    startTime: "T18:00:00",
    endTime: "T20:00:00",
  },
  {
    rangeText: "20.00 - 22.00",
    startTime: "T20:00:00",
    endTime: "T23:00:00",
  },
];

async function fetchCalendarData() {
  const response = await fetch(`/api`);
  return response;
}

const CalendarBooking = () => {
  const query = useSearchParams();
  const selectedRoom = query.get("name");
  const [selectedMonth, setSelectedMonth] = useState(10);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState();
  const calendarObject = calendar().of(parseInt(selectedYear), selectedMonth);

  const addMonth = () => {
    if (selectedMonth === 11) {
      setSelectedYear((prev) => setSelectedYear(prev + 1));
      setSelectedMonth(0);
      return;
    }
    setSelectedMonth((prev) => prev + 1);
  };
  const decMonth = () => {
    if (selectedMonth === 0) {
      setSelectedYear((prev) => setSelectedYear(prev - 1));
      setSelectedMonth(11);
      return;
    }
    setSelectedMonth((prev) => prev - 1);
  };

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchCalendarData();

      const parsed = await response.json().then((data) => {
        return data;
      });
      setLoading(false);
      setEvents(parsed?.items);
    };
    fetchData();
  }, []);

  function filterEventsByTime(events, targetTime) {
    return events?.filter((event) => {
      // Sesuaikan format waktu yang diinginkan dengan format yang ada dalam data
      const formattedTargetTime =
        dayjs(`${selectedMonth + 1}-${selectedDate}-${selectedYear}`).format(
          "YYYY-MM-DD"
        ) +
        targetTime +
        "+07:00"; // Misalnya, '12.00' menjadi '12:00:00+07:00'

      // Bandingkan properti start.dateTime dengan waktu yang ditargetkan

      return event?.start?.dateTime === formattedTargetTime;
    });
  }

  function filterEventsByDate(events, targetTime) {
    return events?.filter((event) => {
      return dayjs(event?.start?.dateTime).format("YYYY-MM-DD") === targetTime;
    });
  }
  return (
    <div className="w-screen px-[110px] pt-[30px] min-h-screen text-left">
      <div className="w-full text-center justify-center flex mt-[66px] text-[32px] font-semibold gap-10">
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
          onClick={decMonth}
        >
          <path
            d="M12.5 20.75L3 11.75L12.5 2.25"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
        <div>
          {calendarObject?.month} {selectedYear}{" "}
        </div>

        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
          onClick={addMonth}
        >
          <path
            d="M1.5 21.5277L11 11.771L1.5 1.47216"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div className="mt-12 mx-auto  flex justify-center">
        {loading && (
          <div className="flex flex-col gap-4 w-full max-w-[1050px] ">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-32 w-full"></div>
          </div>
        )}
        {!loading && (
          <table className="table border-2 border-black max-w-[1050px] justify-center">
            {/* head */}
            <thead className="mx-auto">
              <tr className="mx-auto bg-primary text-white text-[24px]">
                <th className="w-[150px] p-6 border border-black">Minggu</th>
                <th className="w-[150px] p-6 border border-black">Senin</th>
                <th className="w-[150px] p-6 border border-black">Selasa</th>
                <th className="w-[150px] p-6 border border-black">Rabu</th>
                <th className="w-[150px] p-6 border border-black">Kamis</th>
                <th className="w-[150px] p-6 border border-black">Jumat</th>
                <th className="w-[150px] p-6 border border-black">Sabtu</th>
              </tr>
            </thead>
            <tbody>
              {calendarObject?.calendar.map((tr, index) => {
                return (
                  <tr key={index} className="">
                    {tr?.map((td, idx) => {
                      const numberCount = filterEventsByDate(
                        events,
                        dayjs(
                          `${selectedMonth + 1}-${td}-${selectedYear}`
                        ).format("YYYY-MM-DD")
                      )?.length;
                      return (
                        <td
                          key={index + "-" + idx + "xx"}
                          className="h-[120px] border border-black text-left align-top hover:bg-slate-200 cursor-pointer"
                        >
                          {td != 0 && (
                            <div
                              onClick={() => {
                                if (td > 9) {
                                  setSelectedDate(td);
                                } else {
                                  setSelectedDate(`0${td}`);
                                }
                              }}
                            >
                              <div>{td} </div>
                              <svg
                                width="45"
                                height="45"
                                viewBox="0 0 45 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`mx-auto my-auto ${
                                  numberCount < 5 && "opacity-50"
                                }`}
                              >
                                {numberCount && (
                                  <circle
                                    cx="22.5"
                                    cy="22.5"
                                    r="22.5"
                                    fill="#D90027"
                                  />
                                )}
                              </svg>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {selectedDate && (
        <div className="w-full max-w-[1050px] mx-auto mt-20 border-2 border-black rounded-xl">
          <div className="text-[32px] text-white bg-primary p-[14px] rounded-lg">
            {selectedDate} {calendarObject?.month} {selectedYear}
          </div>
          <div className="p-[44px]">
            <div className="border-2 border-black grid grid-cols-6 rounded-lg">
              <div className="p-6 col-span-2 text-center border-r-2 border-black">
                Jam
              </div>
              <div className="p-6 col-span-4 text-center  border-black">
                Kegiatan
              </div>

              {MAP_DATA.map((v, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className="p-6 col-span-2 text-center border-r-2 border-t-2 border-black">
                      {v.rangeText}
                    </div>
                    <div
                      className={`${
                        selectedRange === v.startTime && "bg-slate-200"
                      } p-6 col-span-4 text-center  border-t-2 border-black hover:bg-slate-200 cursor-pointer`}
                      onClick={() => setSelectedRange(v.startTime)}
                    >
                      {filterEventsByTime(events, v.startTime)
                        ?.map((data) => data?.summary)
                        ?.map((v, i) => (
                          <div key={idx + i + idx + "xx" + i}>
                            <span className="text-primary">•</span>
                            {v}
                          </div>
                        ))}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 mx-auto w-full max-w-[1050px] flex justify-end">
        <Link
          href={`/booking?name=${selectedRoom}&date=${
            dayjs(
              `${selectedMonth + 1}-${selectedDate}-${selectedYear}`
            ).format("YYYY-MM-DD") + selectedRange
          }`}
        >
          <button
            disabled={!selectedRange}
            className="btn btn-lg btn-primary text-[28px] rounded-2xl "
          >
            Pilih Tanggal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CalendarBooking;
