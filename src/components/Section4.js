"use client";
import React from "react";
import SplitType from "split-type";

const Section4 = () => {
  const text = new SplitType("[data-split]", { types: "lines" });
  console.log(text);
  return (
    <div className="w-full h-full bg-[#f5f5f5] text-[#7A7A7A] pb-[28rem]  pt-[14rem]  relative">
      <div className="max-w-[92%] md:max-w-[720px] sm:max-w-[540px] ethos_container">
        {/* <span className="text-sm uppercase px-3 py-[.5px] border-[1px] border-black rounded-lg">Ethos</span> */}
        <div className="center_text">
          <h2 className="text-[10vw] relative text-center ethos_text">
            <div className="masking-text ml-[13rem]" data-split>
              Radical
            </div>
            <div className="masking-text" data-split>
              Transparency .
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section4;
