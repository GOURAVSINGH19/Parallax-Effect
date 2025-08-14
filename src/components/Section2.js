"use client";
import Image from "next/image";
import React from "react";
import SplitType from "split-type";

const Section2 = () => {

  return (
    <div className="bg-white min-h-screen mt-[8rem] mx-auto relative">
      <div className="max-w-[92%] relative mx-auto flex flex-col justify-start items-start ">
        <h2 className="text-[3.5rem] leading-[1.1] text-[#605e5ed6]">
          <div className="masking-text overflow-hidden flex uppercase font-[PP Mori] font-600">
            Clean, Conscious,
          </div>
          <div className="masking-text overflow-hidden uppercase font-[PP Mori] font-600">
            Performance
          </div>
          <div className="masking-text overflow-hidden absolute left-[25.7rem] top-[8rem] font-[EditorialNew-Italic] 600 italic">
            skincare.
            <p className="w-full h-[1px] bg-amber-400"></p>
          </div>
        </h2>
        <p className="max-w-[20rem] mt-[1.6rem] text-[.8rem] text-zinc-500">
          Unreservedly honest products that truly work, be
          <br /> kind to skin and the planet – no exceptions!
        </p>
      </div>
      <div className=" relative w-full h-[100vh]">
        <div className="cards_div"></div>
        <div className="cards_div"></div>
        <div className="leaf_1-img">
          <picture>
            <Image
              src="/imgs/leaf2img.png"
              alt="imgs"
              width={60}
              height={60}
              className="w-[10rem] h-[10m] absolute top-[10rem] right-[15rem] z-[2]"
            />
          </picture>
        </div>
        <div className="leaf_2-img">
          <picture>
            <Image
              src="/imgs/leaf1img.png"
              alt="imgs"
              width={60}
              height={60}
              className="w-[10rem] h-[10m] absolute bottom-[0rem] left-[15rem] z-[2]"
            />
          </picture>
        </div>
        <div className="bg-img">
          <picture>
            <div className="h-[100%] md:h-[110%] object-cover">
              <Image
                src="/imgs/girl-1.jpg"
                alt="img"
                width={600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Section2;
