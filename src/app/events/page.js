"use client";
import EventCard from "@/components/Card/Event";
import useEventHooks from "./events.hooks";
import { EventList } from "@/assets/eventList";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Events = () => {
  const { listTab, tabIndex, setTabIndex } = useEventHooks();
  const [listEvent, setListEvent] = useState(EventList);
  const [listSelectedEvent, setListSelectedEvent] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    filterEvent(0);
  }, []);

  const filterEvent = (index) => {
    setTabIndex(index);
    if (index === 0) {
      const list = listEvent.filter((data) => {
        const now = dayjs();
        const date = dayjs(data.date);
        return now.isSame(date, "day");
      });
      setListSelectedEvent(list);
    } else if (index === 1) {
      const list = listEvent.filter((data) => {
        const now = dayjs();
        const date = dayjs(data.date);
        return now.isSame(date, "week");
      });
      setListSelectedEvent(list);
    } else {
      const list = listEvent.filter((data) => data.category === listTab[index]);
      setListSelectedEvent(list);
    }
  };

  const filterRoom = (room) => {
    if (selectedRoom === room) {
      setSelectedRoom("");
      setListSelectedEvent(listEvent);
      return;
    }
    setSelectedRoom(room);
    const list = listEvent.filter((data) => data.room === room);
    setListSelectedEvent(list);
  };

  const filterCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      setListSelectedEvent(listEvent);
      return;
    }
    setSelectedCategory(category);
    const list = listEvent.filter((data) => data.category === category);
    setListSelectedEvent(list);
  };

  const filterDateRange = () => {
    if (!startDate || !endDate) {
      return;
    }
    if (startDate > endDate) {
      return;
    }

    const start = dayjs(startDate).subtract(1, "day");
    const end = dayjs(endDate).add(1, "day");
    console.log(start);
    console.log(end);
    const filteredList = listEvent.filter((item) => {
      const itemDate = dayjs(item.date);
      return itemDate.isAfter(start) && itemDate.isBefore(end);
    });
    setListSelectedEvent(filteredList);
  };

  const clearFilter = () => {
    setSelectedRoom("");
    setSelectedCategory("");
    setStartDate("");
    setEndDate("");
    setListSelectedEvent(listEvent);
    filterEvent(0);
  };

  const searchEvent = (event) => {
    const list = listEvent.filter((data) => {
      const name = data.name.toLowerCase();
      const search = event.target.value.toLowerCase();
      return name.includes(search);
    });
    setListSelectedEvent(list);
  };

  return (
    <>
      <div className="w-screen px-[110px]">
        <div className="text-center mt-[70px]">
          <div className="text-primary text-xl">Event</div>
          <div className="font-bold text-5xl mt-2">IKUTI KEGIATAN DIMARKAS</div>
          <div className="relative w-full">
            <input
              id="search-event-input"
              type="text"
              placeholder="Cari event yang ada di MARKAS Surabaya"
              className="input input-bordered rounded-full shadow-md my-[60px] w-full"
              onChange={searchEvent}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <label
                className="hover:cursor-pointer"
                htmlFor="modal-show-filters"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="orange"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="style=linear">
                    <g id="menu-strawberry">
                      <path
                        id="vector"
                        d="M3 6H21"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        id="vector_2"
                        d="M5 12H19"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        id="vector_3"
                        d="M7 18H17"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div
          role="tablist"
          className="tabs tabs-boxed rounded-full bg-white border border-black"
        >
          {listTab.map((data, index) => (
            <a
              role="tab"
              className={`rounded-full tab ${
                index === tabIndex && "tab-active"
              }`}
              key={index}
              onClick={() => filterEvent(index)}
            >
              {data}
            </a>
          ))}
        </div>
        <div className="mt-[60px] grid grid-cols-3 gap-12">
          {listSelectedEvent?.map((data, index) => (
            <div key={index}>
              <EventCard data={data} />
            </div>
          ))}
        </div>
        <div className="mt-[100px] text-center w-full grid grid-1 gap-12">
          <div className="text-5xl text-primary">Mari berkolaborasi</div>
          <button className="btn btn-lg btn-primary mx-auto text-xl rounded-full ">
            Booking
          </button>
        </div>
      </div>

      <div className="hero min-h-[300px] bg-white" />

      {/* Modal Show Filter */}
      <input type="checkbox" id="modal-show-filters" className="modal-toggle" />
      <label
        htmlFor="modal-show-filters"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-white max-w-screen-lg">
          <div className="relative w-full">
            <input
              id="search-event-input-popup"
              type="text"
              placeholder="Cari event yang ada di MARKAS Surabaya"
              className="input input-bordered rounded-full shadow-md w-full font-light text-xl focus:outline-none p-5"
              onChange={searchEvent}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <h1
                className="text-xl cursor-pointer"
                onClick={() => {
                  document.getElementById("search-event-input-popup").value =
                    "";
                  searchEvent({ target: { value: "" } });
                }}
              >
                ✕
              </h1>
            </div>
          </div>
          <div className="w-full mt-3">
            <p className="font-semibold my-2 px-5 text-xl">RUANGAN</p>
            <div className="flex flex-wrap gap-6 px-5">
              {Array.from(new Set(EventList.map((data) => data.room))).map(
                (room, index) => (
                  <div
                    className={
                      `rounded-full border-2 py-2 px-5 font-semibold text-xl leading-[40px] cursor-pointer` +
                      (selectedRoom === room
                        ? " border-primary text-primary"
                        : " border-black text-black")
                    }
                    key={index}
                    onClick={() => filterRoom(room)}
                  >
                    {room}
                  </div>
                )
              )}
            </div>
            <p className="font-semibold my-2 px-5 text-xl">JENIS KEGIATAN</p>
            <div className="flex flex-wrap gap-6 px-5">
              {Array.from(new Set(EventList.map((data) => data.category))).map(
                (category, index) => (
                  <div
                    className={
                      `rounded-full border-2 py-2 px-5 font-semibold text-xl leading-[40px] cursor-pointer` +
                      (selectedCategory === category
                        ? " border-primary text-primary"
                        : " border-black text-black")
                    }
                    key={index}
                    onClick={() => filterCategory(category)}
                  >
                    {category}
                  </div>
                )
              )}
            </div>
            <p className="font-semibold my-2 px-5 text-xl">TANGGAL KEGIATAN</p>
            <div className="flex gap-5 px-5">
              <input
                type="date"
                className="w-1/3 p-2 rounded-full text-xl border border-black"
                placeholder="Tanggal Kejadian"
                id="start_date"
                name="start_date"
                onChange={(event) => {
                  setStartDate(event.target.value);
                  filterDateRange();
                }}
              />
              <input
                type="date"
                className="w-1/3 p-2 rounded-full text-xl border border-black"
                placeholder="Tanggal Kejadian"
                id="end_date"
                name="end_date"
                onChange={(event) => {
                  setEndDate(event.target.value);
                  filterDateRange();
                }}
              />
            </div>
            <div className="flex mt-5 text-xl font-semibold gap-2 px-5">
              <button
                className="w-1/4 border-black border border-px rounded-full"
                onClick={() => clearFilter()}
              >
                Clear Filter
              </button>
              <label
                className="btn w-1/4 border-black border-px text-white bg-primary rounded-full hover:bg-primary-hover text-xl"
                htmlFor="modal-show-filters"
              >
                Apply Filter
              </label>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default Events;
