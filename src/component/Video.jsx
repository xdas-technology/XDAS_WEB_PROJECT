"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Video = () => {
    const videoRef = useRef(null);
    const windowRef = useRef(null);
    useGSAP(()=>{
        if(videoRef&&videoRef.current){
            const elem = videoRef.current;
            const anim = gsap.from(elem,{
                width:"100vw",
                height:"56vw",
                aspectRatio:"video"
            });
            ScrollTrigger.create({
                scrub:true,
                trigger:windowRef.current,
                start:"20% bottom",
                end:"top top",
                animation:anim,
                // markers:true,
            });
        }
    })
  return (
    <div className=" flex flex-col justify-center h-[100vh] bg-black overflow-hidden">
        <div ref={windowRef} className="  md:flex justify-between  ">
                <video ref={videoRef} className="size-full md:size-9/16 h-auto aspect-video" controls loop autoPlay={true}  playsInline muted poster="/favicon/0dd3384f-03b7-4a43-b7af-4b1889de61eb.mp4.svg">
                    <source src="/videos/AboutUs.mp4" type="video/mp4"/>
                </video>
                {/* <Image
                    src="/favicon/0dd3384f-03b7-4a43-b7af-4b1889de61eb.mp4.svg"
                    alt="Video placeholder"
                    width={2000} 
                    height={1000} 
                    priority 
                    className="size-full md:size-9/16 h-auto aspect-video" 
                    style={{ zIndex: 1 }} 
                    /> */}
                <div className=" flex flex-col justify-center mr-50 ">
                    <p className="text-white w-[100%] md:w-auto md:text-left text-center m-4 ">
                        A short video about our company
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Video