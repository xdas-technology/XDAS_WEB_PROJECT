import StackCard from "@/component/StackCard";
import Hero from "@/component/Hero";
import ScrollProductCard from "@/component/ScrollProductCard";
import Header from "@/component/Header";
export default function Home() {
  return (
    <>
      <div>

      <Header/>
      <Hero/>
      <StackCard/>
      <ScrollProductCard/>
      {/* <ScrollVariableChangerTS/> */}
      <div className=" h-[200vh] w-screen bg-green-300  text-white text-center text-8xl align-text-bottom  ">
        Hero
    </div>
      </div>
    </>
  );
}
