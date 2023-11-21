"use client";

import EventCard from "@/components/Card/Event";
import CircleArrowIcon from "@/images/svg/circleArrow";

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
         { [1,2,3,4,5,6].map((data,index)=> <div key={index}>
          <EventCard data={data} /> 
          </div>
          )}
           
        </div>
      </div>
    </>
  );
}
