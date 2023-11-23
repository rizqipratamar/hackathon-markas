"use client";
import useBooking from "@/app/booking/booking.hooks";
import RoomTypeCard from "../Card/RoomType";
import Image from "next/image";
import ROOM_1 from "@/images/png/room-1.png";
import ROOM_2 from "@/images/png/room-2.png";
import ROOM_3 from "@/images/png/room-3.png";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const BookingMain = () => {
  const { tabIndex, setTabIndex, listTab } = useBooking();
  const query = useSearchParams();
  const selectedTab = query.get("tab");

  useEffect(() => {
    if (selectedTab) setTabIndex(selectedTab);
  }, [selectedTab, setTabIndex]);

  return (
    <>
      <div className="w-screen px-[110px]">
        <div className="text-center mt-[70px]">
          <div className="text-primary text-[28px]">Booking</div>
          <div className="font-bold text-5xl mt-2">
            CARI MARKAS DI SEKITARMU!
          </div>
          <input
            type="text"
            placeholder="Cari “Kota Surabaya” atau “Sidosermo”"
            className="input input-bordered rounded-full shadow-md my-[60px] w-full p-[26px]"
          />
        </div>

        <div role="tablist" className="tabs tabs-boxed h-[70px] my-auto px-4">
          {listTab.map((data, index) => (
            <a
              role="tab"
              className={`tab ${
                index == tabIndex && "tab-active"
              } text-[28px] my-auto h-[55px] `}
              key={index}
              onClick={() => setTabIndex(index)}
            >
              {data}
            </a>
          ))}
        </div>

        <div className="text-left mt-20">
          <div className="text-[28px] text-primary">Markas</div>
          <div className="my-6 text-bold text-5xl">
            Sidosermo, {listTab[tabIndex]}
          </div>
          <div className="text-[#5A5A5A] text-[20px]">
            Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota{" "}
            {listTab[tabIndex]}, Jawa Timur.
          </div>
        </div>

        <div className="grid grid-cols-9 gap-8 mt-20">
          <div className="col-span-6">
            <Image src={ROOM_1} alt="Picture of the author" />
          </div>
          <div className="col-span-2">
            <Image src={ROOM_2} alt="Picture of the author" />
            <Image src={ROOM_3} alt="Picture of the author" className="mt-5" />
            <div className="mt-5 p-[36px] text-center text-4xl border-2 border-black rounded-lg">
              +19 Foto
            </div>
          </div>
        </div>

        <div className="text-left mt-20">
          <div className="text-5xl font-bold">Fasilitas Gedung</div>
          <div className="grid grid-cols-3 gap-[220px] mt-20 text-[28px]">
            <div className="grid grid-cols-1 gap-5">
              <div>✅ Tempat Parkir</div>
              <div>✅ Perpustakaan</div>
              <div>✅ Air Conditioner</div>
              <div>✅ Dispenser Air</div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <div>✅ Rak Sepatu</div>
              <div>✅ Lounge</div>
              <div>✅ Toilet</div>
              <div>✅ Internet</div>
            </div>
            <div>
              <div>✅ Mini Kafe</div>
              <div className="mt-5">✅ Petugas Teknisi</div>
            </div>
          </div>
        </div>

        <div className="mt-20 ">
          <div className="text-5xl font-bold">Detail Lokasi</div>
          <div className="text-left p-[39px] border-2 border-black rounded-lg mt-20">
            <div className="grid grid-cols-2 gap-[150px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15829.404312021992!2d112.7495082!3d-7.3144002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbda250e651f%3A0xe8fb3089fee046e6!2sMARKAS!5e0!3m2!1sid!2sid!4v1700629618914!5m2!1sid!2sid"
                width="600"
                height="580"
                allowfullscreen=""
                className="rounded-lg border-2 border-black"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />

              <div>
                <div className="text-[28px]">Detail Alamat</div>
                <div className="text-[20px] text-[#5A5A5A] font-thin">
                  Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota
                  Surabaya, Jawa Timur.
                </div>
                <div className="divider" />
                <div className="text-[28px]">Tempat Terdekat</div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div className="text-[22px]">Plaza Marina</div>
                    <div className="text-[#5A5A5A]">
                      Pusat perbelanjaan dan hiburan
                    </div>
                  </div>
                  <div className="text-[#5A5A5A] my-auto"> 5 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div className="text-[22px]">Royal Plaza</div>
                    <div className="text-[#5A5A5A]">
                      Pusat perbelanjaan dan hiburan
                    </div>
                  </div>
                  <div className="text-[#5A5A5A] my-auto"> 10 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div className="text-[22px]">UK Petra</div>
                    <div className="text-[#5A5A5A]">
                      Pusat perbelanjaan dan hiburan
                    </div>
                  </div>
                  <div className="text-[#5A5A5A] my-auto"> 15 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div className="text-[22px]">Trans Icon</div>
                    <div className="text-[#5A5A5A]">
                      Pusat perbelanjaan dan hiburan
                    </div>
                  </div>
                  <div className="text-[#5A5A5A] my-auto"> 20 Menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 font-bold text-5xl mb-[90px]">Tipe Ruangan</div>
        <RoomTypeCard />
      </div>
    </>
  );
};

export default BookingMain;
