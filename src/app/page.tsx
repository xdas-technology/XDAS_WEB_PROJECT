import StackCard from "@/component/StackCard";
import ScrollProductCard from "@/component/ScrollProductCard";
import Header from "@/component/Header";
import ThreeDHeader from "@/component/ThreeDHero";
import Video from "@/component/Video"
import SocilasAndLinks from "@/component/SocilasAndLinks";
export default function Home() {
  return (
    <>
      <div className="bg-black ">
      <Header/>
      <ThreeDHeader/>
      <StackCard/>
      <ScrollProductCard/>
      <Video/>
      <SocilasAndLinks/>
      </div>
    </>
  );
}
