"use client";

import { ROOM } from "@/services/roomService";
import { useState, useEffect } from "react";

const useBooking = () => {
  const [roomList, setRoomList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const listTab = ["Surabaya", "Jakarta", "Bandung", "Denpasar"];

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await ROOM.FETCH();
      setRoomList(response?.body);
    };
    fetchRoom();
  }, []);

  return {
    roomList,
    tabIndex,
    setTabIndex,
    listTab,
  };
};

export default useBooking;
