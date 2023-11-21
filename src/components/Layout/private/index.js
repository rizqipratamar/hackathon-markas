"use client";

import { useContext } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { AuthContext } from "@/providers/auth";
import Footer from "../footer";

const PrivateLayout = ({ children }) => {
const { isLogged } = useContext(AuthContext);

  return (
    <>
          <Navbar />
          <Sidebar>{children}</Sidebar>
          <Footer />
    </>
  );
};

export default PrivateLayout;
