"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const buttonref = useRef();
  useGSAP(() => {
    const text = new SplitType(".split-text", { types: "lines" });
    const tl = gsap.timeline();

    gsap.set(text.lines, { translateY: 100, opacity: 0 });
    gsap.set(".bottom_div", { scale: 0, opacity: 0 });
    gsap.set(buttonref.current, { scale: 0, opacity: 0 });
    tl.to(
      text.lines,
      {
        translateY: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      },
      "<"
    );
    tl.to(
      ".bottom_div",
      {
        scale: 1,
        opacity: 1,
        ease: "power4.inOut",
        duration: 1,
      },
      "<"
    );
    tl.to(buttonref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
    });
  }, []);

  return (
    <section className="h-screen relative m-0  flex justify-center items-center text-center">
      <div className=" intro_text  z-[3] relative ">
        <div className="text-center">
          <h1 className="text-white md:text-[6.5rem] text-[6.5rem] lg:text-[4.5rem] font-[PPmori-Regular] split_h1">
            <div className="split-text leading-[1.1em]  overflow-hidden font-[Editorial-Regular] font-800">
              <span className="font-serif text_font">True</span> to Oneself
            </div>
            <div className="split-text leading-[1.1em]  overflow-hidden">
              Kind of <span className="text_font">Nature</span>
            </div>
          </h1>
        </div>
        <p className="intro_desc split-text text-white overflow-hidden">
          Unreservedly honest products that truly work,
          <br /> be kind to skin and the planet – no exceptions!
        </p>
      </div>
      <div className="home_video w-full h-full absolute top-0 left-0">
        <div className="bg-black w-full h-full opacity-[.2] z-[2] pointer-events-none absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="w-full h-full absolute top-0 bottom-0 left-0 overflow-hidden">
          <video
            src="/video/hero-m.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 bottom-0 overflow-hidden">
          <video
            src="/video/hero.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Link href="/">
        <div className="bottom_div overflow-hidden">
          <div className="split-text">
            <p className="uppercase text-[.6rem] underline">
              Explore all products
            </p>
          </div>
          <div ref={buttonref} className="link_arrow">
            <svg
              className="icon-arrow"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1e53e120=""
            >
              <path
                d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                fill="white"
              ></path>
            </svg>
            {/* <svg
              className="icon-arrow"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1e53e120=""
            >
              <path
                d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                fill="white"
              ></path>
            </svg> */}
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Home;
