"use client";

import { useContext } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { AuthContext } from "@/providers/auth";

const PrivateLayout = ({ children }) => {
const { isLogged } = useContext(AuthContext);

  return (
    <>
          <Navbar />
          <Sidebar>{children}</Sidebar>
    </>
  );
};

export default PrivateLayout;
