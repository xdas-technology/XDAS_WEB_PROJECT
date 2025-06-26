"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Observer } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(Observer);
const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        const pl = gsap.to(headerRef.current,
            {
                top: - (headerRef.current?.offsetHeight || 0),
                visibility:0,
                duration: 0.3, 
                paused:true,
            }
        );
        const ob= Observer.create({
            target:window,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => pl.reverse(),
            onUp: () => pl.play(),
            tolerance: 10,
            preventDefault: false
        });
        return () => {
        // Or if you only create one observer instance:
        // observerInstance.kill(); // If you stored the result of Observer.create
        ob.kill();
    };
    },[])
  return (
    <div ref={headerRef} className="sticky bg-xdas-purple-800 w-full top-0 z-30">
        Header
    </div>
  )
}

export default Header