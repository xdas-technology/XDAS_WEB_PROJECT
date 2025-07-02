"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef} from "react";
import { useWindowWidth } from "@/utils/useWindowWidth";
import Image from "next/image";
import ".//../app/index.css"

gsap.registerPlugin(ScrollTrigger)
interface props{
  index:number,
  scrollProgress:number,
  title?:string,
  description?:string,
  colour?:string,
};
function StickyCards({index , scrollProgress , title , description , colour}:props) {
  const windowWidth = useWindowWidth();
  const sizeConst = (windowWidth>=1024)?1:(1024/windowWidth);
  const topVal = (index - scrollProgress*sizeConst) * 7;
  const cardRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    if(!desRef || ! desRef.current) return;
    const tl = gsap.timeline();
    tl.from(desRef.current,{
      y:"66vh",
      ease:'sine.inOut',
      opacity:0
    });
    tl.from(gifRef.current,{
      y:"66vh",
      ease:'sine.inOut',
      opacity:0
    });
    ScrollTrigger.create({
      trigger:cardRef.current,
      animation:tl,
      start: 'top bottom',
      end: 'top 20%  ',
      scrub:true,
      onRefresh: (self) => {
          if (self.progress > 0 && self.progress < 1) {
            self.animation?.progress(self.progress);
          } else if (self.progress === 1) {
            gsap.set(desRef.current, { y: 0, opacity: 1 });
          } else {
            gsap.set(desRef.current, { y: 2 * window.innerHeight / 3, opacity: 0 });
          }
        }

    });
  })

  return (
    
    <div 
    
    className={`sticky flex justify-center h-screen ${colour||'bg-black'}  overflow-visible`} 
    style={{top:`${topVal}rem`}} >
      <div 
      ref={cardRef}
      className="pt-4 text-white ">
       <div 
       className=" flex justify-around">
        <div>
        <div className="m-4"> {index}</div>
        <h1 className=" text-3xl  md:text-5xl font-Lora font-normal mx-[20%] mt-6">
          {title} 
        </h1>
        <div ref={desRef} className="mx-[10%] sm:mx-[20%] lg:mr-[0%] mt-[5%]">
          <p className="text-sm sm:text-[1.2rem] font-IBMPlexSerif text text-justify ">
          {description}
        </p>
        <div className=" flex justify-end ">
          <button 
          className=" m-4 px-16 py-2 border-2  hover:border-xdas-purple-600 hover:bg-xdas-purple-600 hover:drop-shadow-sm hover:drop-shadow-xdas-purple-700 duration-100 ease-[cubic-bezier(0.76,0,0.24,1)]"> 
          Explore
          </button>
        </div>
        </div>
        
        </div>
        <div ref={gifRef} className="flex justify-center collapse mt-8 lg:w-400 lg:h-100 lg:visible"> 
          <Image className="m-4" src="/output-onlinegiftools(1).gif" alt="XDAS" height={400} width={400}/>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default StickyCards