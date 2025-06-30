"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
interface props{
  index:number,
  scrollProgress:number,
  title?:string,
  description?:string,
  colour?:string,
};
function StickyCards({index , scrollProgress , title , description , colour}:props) {
  const topVal = (index - scrollProgress) * 7;
  const cardRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    if(!desRef || ! desRef.current) return;
    const anim = gsap.from(desRef.current,{
      y: 2*window.innerHeight/3,
      ease:'sine.inOut',
      opacity:0
    });
    ScrollTrigger.create({
      trigger:cardRef.current,
      animation:anim,
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
    
    className={`sticky flex justify-center h-screen ${colour||'bg-black'} border-t-2 border-gray-400 border-dashed`} 
    style={{top:`${topVal}rem`}}>
      <div 
      ref={cardRef}
      className="pt-4 text-white ">
       <div>
        <div className="m-4"> {index}</div>
        <h1 className="  text-5xl font-bebas  mx-[20%] mt-8">
          {title} 
        </h1>
        <div ref={desRef} className="mx-[20%] mt-[10%]">
          <p className=" text text-justify">
          {description}
        </p>
        <div className=" flex justify-end ">
          <button 
          className=" px-16 py-2 border-2  hover:border-xdas-purple-600 hover:bg-xdas-purple-600 hover:drop-shadow-sm hover:drop-shadow-xdas-purple-700 duration-100 ease-[cubic-bezier(0.76,0,0.24,1)]"> 
          Explore
          </button>
        </div>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default StickyCards