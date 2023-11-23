"use client";

import EventCard from "@/components/Card/Event";
import FilosofiCard from "@/components/Card/Filosofi";
import FAQSection from "@/components/Section/FAQ";
import KarateristikSection from "@/components/Section/Karateristik";
import ReviewSection from "@/components/Section/Review";
import CircleArrowIcon from "@/images/svg/circleArrow";
import PartnerSection from "@/components/Section/Partner";

import Image from "next/image";
import ILLUSTRATION_IMAGE from "@/images/png/illustration-1.png";
import LOGO from "@/images/png/logo/markas-icon.png";
import LOGO_TEXT from "@/images/png/logo/markas-text-red.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-white text-[96px]">
              Markas
            </h1>
            <p className="py-6 text-white text-[36px] font-light ">
              A hub for startup founders to grow with the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen bg-primary text-white p-10 text-[32px] text-center">
        GAIN KNOWLEDGE - GET MENTORED - EXPAND NETWORK
      </div>

      <div className="w-screen min-h-screen bg-white p-[108px]">
        <div className="flex justify-between">
          <div>
            <div className="text-[48px] text-left font-bold ">
              IKUTI KEGIATAN KAMI DI MARKAS
            </div>
            <div className="text-[20px] font-light">
              Jangan lewatkan event-event seru di MARKAS
            </div>
          </div>
          <div className="flex my-auto gap-5">
            <CircleArrowIcon side="left" />
            <CircleArrowIcon side="right" />
          </div>
        </div>

        <div className="mt-[60px] grid grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((data, index) => (
            <div key={index}>
              <EventCard data={data} />
            </div>
          ))}
        </div>

        <div className="mt-[108px] text-center">
          <div className="text-primary text-[28px] font-semibold">FILOSOFI</div>
          <div className="text-5xl mt-5 font-extrabold">
            INKLUSIF DAN KOLABORATIF
          </div>
          <div className="text-xl font-light mt-[35px] mb-20">
            Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital adalah
            untuk berkolaborasi <br /> membuat ekosistem startup Indonesia
            menjadi inklusif dan kolaboratif.
          </div>
        </div>
        <div className="mt-[80px] grid grid-cols-3 gap-[44px]">
          <FilosofiCard />
        </div>

        <div className="mt-[100px] w-full flex">
          <Link href="/about" className="mx-auto">
            <button className="btn btn-lg btn-primary text-[28px] rounded-full">
              Cari tahu lebih
            </button>
          </Link>
        </div>
      </div>

      <div className="w-screen bg-primary text-white text-center py-[52px] mt-[124px]">
        <div className="text-[48px] font-extrabold mb-12">
          MARI BERKOLABORASI
        </div>
        <Link href="/booking" className="mx-auto">
          <button className="btn btn-outline bg-white btn-lg btn-primary py-4 px-[104px] text-[28px] font-semibold rounded-full ">
            Booking
          </button>
        </Link>
      </div>

      <div className="hero min-h-screen bg-white my-20">
        <KarateristikSection />
      </div>

      <ReviewSection />

      <FAQSection />

      <div className="w-screen min-h-screen text-center mt-[180px]">
        <div className="text-5xl font-extrabold">
          KAMI MENUNGGUMU DI MARKAS!
        </div>
        <Image
          src={ILLUSTRATION_IMAGE}
          className="my-[85px]"
          alt="ilustration image"
        />
        <button className="btn btn-lg btn-primary mx-auto px-12 text-[28px] font-semibold rounded-full">
          Kunjungi Instagram Kami
        </button>
      </div>

      <PartnerSection />

      <div className="text-center mt-[202px]">
        <div className="text-4xl">
          Ingin bekerja di tempat yang nyaman, fleksibel, dan penuh inspirasi?
        </div>
        <div className="text-4xl my-[60px]">
          Segera bergabung bersama kami di{" "}
          <span className="text-primary font-bold">#MARKAS</span>
        </div>
        <div className="flex w-full justify-center">
          <Image src={LOGO} width={230} alt="icon" />
        </div>
        <div className="flex w-full justify-center">
          <Image src={LOGO_TEXT} width={360} alt="icon text" />
        </div>
      </div>

      <div className="hero min-h-[300px] bg-white"></div>
    </>
  );
}
