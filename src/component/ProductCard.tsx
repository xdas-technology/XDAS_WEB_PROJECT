"use client"
import gsap from "gsap";
import { useRef } from "react";


interface props {
  end?:boolean,
  img:string,
};

const ProductCard = ({end,img}:props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const onHover = () => {
    if (!contentRef.current) return; 
    
    gsap.to(contentRef.current, {
      y: -contentRef.current.offsetHeight/2, 
      duration:1, 
      ease: "power2.out", 
      overwrite: true
    })
  };
  const onHoverLeave = () => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      y: 0,
      duration:1,
      ease: "power2.out",
    });
    
  };
  
  return (
      <div className={`
        flex 
        justify-${end?'end':'start'} 
        mx-2 my-45 
        md:m-45 
        overflow-hidden        
        md:aspect-w-auto md:aspect-h-auto 
      `}>      
      <div ref={imageRef} className={`w-165 h-138  overflow-hidden bg-no-repeat bg-cover bg-center`}
      style={{backgroundImage:`url('${img}')`}}
      >
      <div ref={contentRef} className="h-[200%] w-full " onMouseEnter={onHover} onMouseLeave={onHoverLeave} onTouchMove ={onHover} onTouchEnd={onHoverLeave}>
      <div className="h-[50%] w-[100%] flex flex-col justify-end ">
            <h1 className=" m-12 text-white text-3xl ">
              Microsoft
            </h1>
        </div> 
      <div className="h-[50%] w-[100%] flex flex-col">
          <h1 className=" m-12 text-white text-3xl ">
              What we Did
          </h1>
          <div className="text-white p-8 " >
            We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.
          </div>
        </div> 
      </div>


      </div>
    </div>
  )
}

export default ProductCard