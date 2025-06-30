"use client"
import StackCard from "@/component/StackCard";
import ScrollProductCard from "@/component/ScrollProductCard";
import Header from "@/component/Header";
import ThreeDHeader from "@/component/ThreeDHero";
import Video from "@/component/Video"
import SocilasAndLinks from "@/component/SocilasAndLinks";
// import Preloader from "@/component/Preloader"

export default function Home() {
  

  
  return (
    <>
      <div>
        <div  className="bg-black ">
        {/* <Preloader/> */}
        <Header/>
        <ThreeDHeader/>
        <StackCard/>
        <ScrollProductCard/>
        <Video/>
        <SocilasAndLinks/>
        </div>
      </div>
    </>
  );
}




