"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import  useWindowWidth  from "@/utils/useWindowWidth";
import Image from "next/image";
import ".//../app/index.css"
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)

interface props {
  index: number,
  scrollProgress: number,
  title?: string,
  description?: string,
  colour?: string,
  textColor?: string
};

function StickyCards({ index, scrollProgress, title, description, colour, textColor }: props) {
  const windowWidth = useWindowWidth();
  const sizeConst = (windowWidth >= 1024) ? 1 : (1024 / windowWidth);
  const topVal = (index - scrollProgress * sizeConst) * 7;

  const cardRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!desRef.current || !gifRef.current || !cardRef.current) return;

    const tl = gsap.timeline({
      paused: true 
    });

    tl.fromTo(desRef.current,
      { y: "66vh", opacity: 0 },
      { y: 0, opacity: 1, ease: "sine.inOut", duration: 1 }
    );

    tl.fromTo(gifRef.current,
      { y: "66vh", opacity: 0 },
      { y: 0, opacity: 1, ease: "sine.inOut", duration: 1 , delay:.2 },
      "<" 
    );

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top bottom',
      end: 'top 20%',
      scrub: true,
      animation: tl,
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.pause(),
      onLeaveBack: () => tl.pause(),
      onRefresh: (self) => {
        if (self.progress > 0 && self.progress < 1) {
          tl.progress(self.progress);
        } else if (self.progress === 1) {
          gsap.set(desRef.current, { y: 0, opacity: 1 });
        } else {
          gsap.set(desRef.current, { y: "66vh", opacity: 0 });
        }
      }
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  });

  return (
    <div
      className={`sticky flex justify-center items-start min-h-screen ${colour || 'bg-black'} overflow-visible px-4`}
      style={{ top: `${topVal}rem` }}
    >
      <div
        ref={cardRef}
        className={`pt-4 ${textColor || 'text-white'} w-full max-w-[1440px]`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-6">
          <div className="w-full lg:w-2/3">
            <div className="m-2 text-lg lg:text-xl">{index}</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Lora font-normal text-center lg:text-left mx-4 sm:mx-4">
              {title}
            </h1>
            <div ref={desRef} className="mx-4 sm:mx-4 mt-4">
              <p className="text-sm sm:text-base md:text-lg font-IBMPlexSerif text-justify">
                {description}
              </p>
              <div className="flex justify-center lg:justify-end mt-6">
              <Link href="/pricing">
                <button
                  className="m-2 px-6 sm:px-10 py-2 border-2 hover:border-xdas-purple-600 hover:bg-xdas-purple-600 hover:drop-shadow-sm hover:drop-shadow-xdas-purple-700 duration-100 ease-[cubic-bezier(0.76,0,0.24,1)]"
                >
                  Explore
                </button>
              </Link>
              </div>
            </div>
          </div>

          <div
            ref={gifRef}
            className="flex justify-center lg:justify-end mt-8 w-full lg:w-fit"
          >
            <Image
              className="m-2 max-w-full h-auto"
              src="/resource/humanFace.gif"
              alt="XDAS"
              width={400}
              height={400}
              sizes="(max-width: 768px) 80vw, 400px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyCards;
