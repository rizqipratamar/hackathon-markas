"use client";

import RoomTypeCard from "@/components/Card/RoomType";
import useBooking from "./booking.hooks";

const Booking = () => {
  const { roomList, tabIndex, setTabIndex, listTab } = useBooking();

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
            className="input input-bordered rounded-full shadow-md my-[60px] w-full"
          />
        </div>

        <div role="tablist" className="tabs tabs-boxed">
          {listTab.map((data, index) => (
            <a
              role="tab"
              className={`tab ${index === tabIndex && "tab-active"}`}
              key={index}
              onClick={() => setTabIndex(index)}
            >
              {data}
            </a>
          ))}
        </div>

        <div className="text-left mt-20">
          <div>Markas</div>
          <div>Sidosermo, Surabaya</div>
          <div>
            Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota Surabaya,
            Jawa Timur.
          </div>
        </div>

        <div className="text-left mt-20">
          <div>Fasilitas Gedung</div>
          <div className="grid grid-cols-3 gap-[220px]">
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
          <div>Detail Lokasi</div>
          <div className="text-left p-[39px] border-2 border-black rounded-lg">
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
                <div>Detail Alamat</div>
                <div>
                  Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota
                  Surabaya, Jawa Timur.
                </div>
                <div className="divider" />
                <div>Tempat Terdekat</div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div>Plaza Marina</div>
                    <div>Pusat perbelanjaan dan hiburan</div>
                  </div>
                  <div> 5 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div>Plaza Marina</div>
                    <div>Pusat perbelanjaan dan hiburan</div>
                  </div>
                  <div> 5 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div>Plaza Marina</div>
                    <div>Pusat perbelanjaan dan hiburan</div>
                  </div>
                  <div> 5 Menit</div>
                </div>
                <div className="flex justify-between mt-[21px]">
                  <div>
                    <div>Plaza Marina</div>
                    <div>Pusat perbelanjaan dan hiburan</div>
                  </div>
                  <div> 5 Menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 font-bold text-5xl mb-[90px]">Tipe Ruangan</div>
        <RoomTypeCard />
      </div>
      <div className="w-screen px-[110px] pt-[110px] min-h-screen bg-primary text-left mt-[226px] text-white">
        <div className="text-white text-[36px]">
          Hal yang perlu diperhatikan
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Booking;
