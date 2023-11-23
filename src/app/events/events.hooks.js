"use client";
import { useState } from "react";

const useEventHooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const listTab = [
    "Kegiatan Hari Ini",
    "Minggu ini",
    "Meeting",
    "Workshop",
    "Talkshow",
  ];

  return {
    tabIndex,
    setTabIndex,
    listTab,
  };
};

export default useEventHooks;
