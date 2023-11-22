"use client";
import { useState } from "react";

const useEventHooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const listTab = ["Surabaya", "Jakarta", "Bandung", "Denpasar"];

  return {
    tabIndex,
    setTabIndex,
    listTab,
  };
};

export default useEventHooks;
