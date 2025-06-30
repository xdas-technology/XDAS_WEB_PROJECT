import ProductCard from "./ProductCard";

const data = [
  {
    end: false,
    img: "../../services/ai-and-automation.webp",
  },
  {
    end: true,
    img: "../../services/digital-marketing.webp",
  },
  {
    end: false,
    img: "../../services/mobile-app-development.webp",
  },
  {
    end: true,
    img: "../../services/web-app-development.webp",
  },
  {
    end: false,
    img: "../../services/website-development.webp",
  },
];

const ScrollProductCard = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center bg-gradient-to-b from-xdas-purple-800 to-black p-4 lg:p-8">
        <h1 className="w-full text-center font-serif text-2xl text-white sm:text-3xl md:text-4xl lg:w-[60%] lg:text-left xl:w-[40%]">
          Code the stars with mortal hands,Create new worlds with logic's
          strands, Conquer limits, bold and free,Thy mind, the throne of
          destiny.
        </h1>
      </div>
      <div className="relative z-20 pb-[100vh]">
        {data.map((e, idx) => (
          <ProductCard key={idx} end={e.end} img={e.img} />
        ))}
      </div>
    </div>
  );
};

export default ScrollProductCard;