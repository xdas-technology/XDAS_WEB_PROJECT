import ProductCard from "./ProductCard";

const data = [
  {
    end: false,
    img: "../../services/ai-and-automation.webp",
    thumbnailTitle: "Company",
    title: "What we Did",
    description: `We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.`
  },
  {
    end: true,
    img: "../../services/digital-marketing.webp",
    thumbnailTitle: "Company",
    title: "What we Did",
    description: `We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.`
  },
  {
    end: false,
    img: "../../services/mobile-app-development.webp",
    thumbnailTitle: "Company",
    title: "What we Did",
    description: `We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.`
  },
  {
    end: true,
    img: "../../services/web-app-development.webp",
    thumbnailTitle: "Company",
    title: "What we Did",
    description: `We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.`
  },
  {
    end: false,
    img: "../../services/website-development.webp",
    thumbnailTitle: "Company",
    title: "What we Did",
    description: `We're proud to have partnered with Microsoft, providing them with a range of our services.
              Our collaboration has focused on delivering software development, cloud infrastructure management, data analytics, and AI/ML support. 
              We've also offered consulting and technical support to ensure their continued success. 
              This ongoing partnership highlights our commitment to delivering high-quality, impactful technology solutions.`
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
          <ProductCard key={idx} end={e.end} img={e.img} thumbnailTitle={e.thumbnailTitle} title={e.title} description={e.description}/>
        ))}
      </div>
    </div>
  );
};

export default ScrollProductCard;