"use client";

import { useState } from "react";

const useBooking = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const listTab = ["Surabaya", "Jakarta", "Bandung", "Denpasar"];

  return {
    tabIndex,
    setTabIndex,
    listTab,
  };
};

export default useBooking;
