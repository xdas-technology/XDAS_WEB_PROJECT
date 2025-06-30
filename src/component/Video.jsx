"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
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
    <div className=" flex flex-col justify-center h-[100vh] bg-black">
        <div ref={windowRef} className="  md:flex justify-between  ">
                <video ref={videoRef} className=" size-full md:size-9/16 h-auto aspect-video" controls loop autoPlay >
                <source src="https://www.accenture.com/content/dam/system-files/acom/custom-code/change-more/media/custom-rad-hero-bg-video.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                    
                />
                Your browser does not support the video tag.
                </video>
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