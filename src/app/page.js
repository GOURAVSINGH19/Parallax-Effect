import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <div className="overflow-hidden main">
        {/* <Home /> */}
        <div className="h-[100vh] bg-white"></div>
        {/* <Section2 /> */}
        <Section3 />

        <div className="h-[100vh] bg-white"></div>
      </div>
    </>
  );
};

export default page;
