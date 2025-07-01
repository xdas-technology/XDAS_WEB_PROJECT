"use client"
import gsap from "gsap";
import { useRef, useState } from "react";
import Image from "next/image";

interface props {
  end?:boolean,
  img:string,
  thumbnailTitle:string,
  title:string,
  description:string,
};

const ProductCard = ({end,img,thumbnailTitle, title , description}:props) => {
  const [clicked,setClicked] = useState(false);
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
  const onClick = ()=>{
    if(clicked)onHover();
    else onHoverLeave();

    setClicked(!clicked);
  }
  
  return (
      <div className={`
        flex 
        justify-${end?'end':'start'} 
        mx-2 my-45 
        md:m-45 
        overflow-hidden        
        md:aspect-w-auto md:aspect-h-auto 
      `}>      
      <div ref={imageRef} className={` w-[90vw] h-[81.6vw] sm:w-165 sm:h-138  overflow-hidden bg-no-repeat bg-cover bg-center`}
      style={{backgroundImage:`url('${img}')`}}
      >
      <div ref={contentRef} className="h-[200%] w-full " onMouseEnter={onHover} onMouseLeave={onHoverLeave} onClick ={onClick} >
      <div className="h-[50%] w-[100%] flex flex-col justify-end ">
            {/* <Image className="m-4" src="/background/doodle.png" alt="XDAS" height={400} width={400}/> */}
            <h1 className="font-EBGaramond m-12 text-white text-3xl ">
              {thumbnailTitle}
            </h1>
            
        </div> 
      <div className="h-[50%] w-[100%] flex flex-col justify-between">
          <h1 className="font-EBGaramond m-6 sm:m-8 md:m-12 text-white text-xl sm:text-2xl md:text-3xl ">
              {/* What we Did */}
              {title}
          </h1>
          <div className="text-white p-8 text-[80%] sm:text-[100%] md:text-[120%] " >
              {description}
          </div>
        </div> 
      </div>


      </div>
    </div>
  )
}

export default ProductCard