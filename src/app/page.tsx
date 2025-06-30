import StackCard from "@/component/StackCard";
import Hero from "@/component/Hero";
import ScrollProductCard from "@/component/ScrollProductCard";
import Header from "@/component/Header";
import ThreeDHeader from "@/component/ThreeDHero";
import Video from "@/component/Video"

export default function Home() {
  return (
    <>
      <div>
      <Header/>
      <ThreeDHeader/>
      <Hero/>
      <StackCard/>
      <ScrollProductCard/>
      <Video/>
      <div className=" h-[100vh] w-screen bg-black  text-white text-center text-8xl align-text-bottom  ">
        Socials and 
    </div>
      </div>
    </>
  );
}
