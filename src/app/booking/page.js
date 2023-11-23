"use client";

import BookingMain from "@/components/Booking";
import CalendarBooking from "@/components/Booking/calendar";
import FormBooking from "@/components/Booking/form";
import BookingSuccess from "@/components/Booking/success";
import AttentionSection from "@/components/Section/Attention";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Booking = () => {
  const query = useSearchParams();

  const selectedRoom = query.get("name");
  const selectedDate = query.get("date");
  const isSuccess = query.get("success");
  return (
    <>
      {!selectedRoom && <BookingMain />}
      {selectedRoom && (
        <div>
          <Link href="/booking">
            <div className="flex px-[55px] mx-[110px] py-[26px] gap-2 border-2 border-black rounded-xl bg-white max-w-[380px] my-auto">
              <svg
                width="13"
                height="21"
                viewBox="0 0 13 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto"
              >
                <path
                  d="M11.5 19.5L2 10.5L11.5 1"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
              <div className="my-auto">Kembali ke Pemilihan Ruangan</div>
            </div>
          </Link>

          <div className="w-full text-center justify-center flex mt-[66px]">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <div
                    className={`text-[22px] my-auto ${
                      !isSuccess && !selectedDate
                        ? "text-black"
                        : "text-[#BCBCBC]"
                    }`}
                  >
                    <span className="text-primary ">1 /</span> Pilih tanggal
                  </div>
                </li>
                <li>
                  <div
                    className={`text-[22px] my-auto ${
                      !isSuccess && selectedDate
                        ? "text-black"
                        : "text-[#BCBCBC]"
                    }`}
                  >
                    <span className="text-primary">2 / </span>
                    Pesan
                  </div>
                </li>
                <li>
                  <div
                    className={`text-[22px] my-auto ${
                      isSuccess ? "text-black" : "text-[#BCBCBC]"
                    }`}
                  >
                    <span className="text-primary">3 / </span>
                    Selesai
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {!selectedDate && <CalendarBooking />}
          {!isSuccess && selectedDate && <FormBooking />}
          {isSuccess && <BookingSuccess />}
        </div>
      )}

      <AttentionSection />
      <div className="hero min-h-[300px] bg-primary" />
    </>
  );
};

export default Booking;
