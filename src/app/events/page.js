"use client";
import EventCard from "@/components/Card/Event";
import useEventHooks from "./events.hooks";

const Events = () => {
  const { listTab, tabIndex, setTabIndex } = useEventHooks();
  return (
    <>
      <div className="w-screen px-[110px]">
        <div className="text-center mt-[70px]">
          <div className="text-primary text-[28px]">Event</div>
          <div className="font-bold text-5xl mt-2">IKUTI KEGIATAN DIMARKAS</div>
          <input
            type="text"
            placeholder="Cari event yang ada di MARKAS Surabaya"
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
        <div className="mt-[60px] grid grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => (
            <div key={index}>
              <EventCard data={data} />
            </div>
          ))}
        </div>
        <div className="mt-[100px] text-center w-full grid grid-1 gap-12">
          <div className="text-5xl text-primary">Mari berkolaborasi</div>
          <button className="btn btn-lg btn-primary mx-auto text-[28px] rounded-full ">
            Booking
          </button>
        </div>
      </div>

      <div className="hero min-h-[300px] " />
    </>
  );
};

export default Events;
