"use client";

import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Section3 = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-15%", "30%"]);

  const translatex = useMotionValue(0);
  const translatey = useMotionValue(0);

  const transform = useTransform(
    [translatex, translatey],
    ([latestX, latestY]) =>
      `translate3d(${latestX}px, ${latestY}px, -20px) scale(0.9) rotate(3deg)`
  );

  return (
    <div ref={sectionRef} className="w-full bg-white mt-[5rem]">
      <div className="half_grid_1 half_grid">
        <div className="parallax">
          <div className="parallax_img relative w-full h-[110%] overflow-hidden">
            <motion.div
              style={{ y }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src="/imgs/explore-1.jpg"
                alt="Parallax Girl"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="half_grid_content">
          <div className="flex items-end justify-between">
            <div className="half_grid_heading">
              <h3 className="title">
                <div className="masking-text">pure</div>
                <div className="masking-text italic font-[EditorialNew-Italic]">
                  brilliance
                </div>
              </h3>
            </div>
            <div className="w-[4rem] h-[4rem] rounded-full bg-[#121212] relative flex justify-center items-center">
              <svg
                class="icon-arrow"
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-56897ead=""
              >
                <path
                  d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <motion.div ref={cardRef} className="card_container items-center">
            <div className="overflow-visible h-full  mt-[2em] mb-[2em]">
              <motion.div
                drag="x"
                whileDrag={{
                  scale: 0.8,
                  rotate: 3,
                  translate: transform,
                }}
                dragElastic={0}
                dragTransition={{ bounceStiffness: 2000, bounceDamping: 60 }}
                dragConstraints={{ left: -250, right: 0, top: 0, bottom: 0 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="relative  will-change-transform flex h-[100%] z-[1]  gap-[1.5rem] cursor-grab"
              >
                <motion.a
                  whileDrag={{
                    scale: 0.8,
                    rotate: 3,
                    x: 0,
                    y: 10,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="card_items w-full h-full cursor-pointer"
                >
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </motion.a>
                <motion.a className="card_items w-full h-full cursor-pointer">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </motion.a>
                <motion.a className="card_items w-full h-full cursor-pointer">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="half_grid_1 half_grid">
        <div className="half_grid_content">
          <div className="flex items-end justify-between">
            <div className="half_grid_heading">
              <h3 className="title">
                <div className="masking-text">Varnaya</div>
                <div className="masking-text italic font-[EditorialNew-Italic]">
                  Blends
                </div>
              </h3>
            </div>
            <div className="w-[4rem] h-[4rem] rounded-full bg-[#121212] relative flex justify-center items-center">
              <svg
                class="icon-arrow"
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-56897ead=""
              >
                <path
                  d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <motion.div ref={cardRef} className="card_container items-center">
            <div className="overflow-visible h-full  mt-[2em] mb-[2em] touch-pan-y">
              <motion.div
                drag="x"
                whileDrag={{
                  rotate: "2deg",
                  scale: 0.8,
                  transitionDuration: 100,
                  transitionDelay: 200,
                }}
                dragElastic={0}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                dragConstraints={{ left: -500, right: 0, top: 0, bottom: 0 }}
                className="relative  will-change-transform flex h-[100%] z-[1]  gap-[1.5rem] cursor-grab transform-3d perspective-distant"
              >
                <a className="card_items w-full h-full cursor-pointer">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover select-none"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </a>
                <a className="card_items w-full h-full cursor-pointer ">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover  select-none"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </a>
                <a className="card_items w-full h-full cursor-pointer">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover  select-none"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </a>
                <a className="card_items w-full h-full">
                  <div className="card relative">
                    <Image
                      className="w-full h-full object-cover  select-none"
                      alt="img"
                      src="/imgs/Minimalist Pump Bottle.png"
                      fill
                    />
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="parallax">
          <div className="parallax_img relative w-full h-[110%] overflow-hidden">
            <motion.div
              style={{ y: y2 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src="/imgs/explore-2.jpg"
                alt="Parallax Girl"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
