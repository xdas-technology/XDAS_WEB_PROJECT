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
  const demo = "At [Your Company Name], we specialize in transforming your business vision into a powerful online reality. We don't just build websites; we craft engaging, high-performing digital experiences tailored to your unique needs. Our comprehensive WEB DEVelopment services include everything from custom design and development to ensure your site is beautiful and functional, to responsive, mobile-first solutions that look great on any device. We also offer robust e-commerce platforms for seamless online selling, sophisticated web applications to streamline your operations, and website revitalization to modernize outdated sites. We build with performance and SEO in mind, ensuring your site is fast and easily discoverable. Plus, our ongoing maintenance and support guarantee your website remains secure and up-to-date long after launch. Choose us for our experienced team, client-centric approach, and commitment to leveraging cutting-edge technologies."
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
        // markers:true,
        onUpdate: () => {
          setScrollProgress(animatedValue.val);
          //  console.log(scrollProgress);

        },
      },
    });
  }, { scope: sectionRef, dependencies: [] });
  const colourNames = [
  "bg-xdas-purple-100",
  "bg-xdas-purple-200",
  "bg-xdas-purple-300",
  "bg-xdas-purple-400",
  "bg-xdas-purple-500",
  "bg-xdas-purple-600",
  "bg-xdas-purple-700",
  "bg-xdas-purple-800"
];
  let i =2;
  return (
    <div ref = {sectionRef} className="relative top-0">
        <StickyCards index={0} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
        <StickyCards index={1} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
        <StickyCards index={2} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
        <StickyCards index={3} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
        <StickyCards index={4} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
        <StickyCards index={5} title="WEB DEV" description={demo} scrollProgress={scrollProgress} colour={colourNames[i++]}/>
    </div>
  )
}

export default StackCard;