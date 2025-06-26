"use client"
import { useRef, useState } from "react";
import StickyCards from "./StickyCards"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackCard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const animatedValue = useRef({ val: 0 }).current;

  useGSAP(() => {

    gsap.to(animatedValue, {
      val: 1.5,
      ease: 'steps.in',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers:true,
        onUpdate: () => {
          setScrollProgress(animatedValue.val);
          //  console.log(scrollProgress);

        },
      },
    });
  }, { scope: sectionRef, dependencies: [] });
  return (
    <div ref = {sectionRef} className="relative top-0">
        <StickyCards index={0} scrollProgress={scrollProgress}/>
        <StickyCards index={1} scrollProgress={scrollProgress}/>
        <StickyCards index={2} scrollProgress={scrollProgress}/>
        <StickyCards index={3} scrollProgress={scrollProgress}/>
        <StickyCards index={4} scrollProgress={scrollProgress}/>
        <StickyCards index={5} scrollProgress={scrollProgress}/>
    </div>
  )
}

export default StackCard;