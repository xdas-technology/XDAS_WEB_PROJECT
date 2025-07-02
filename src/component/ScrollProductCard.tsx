import ProductCard from "./ProductCard";

const data = [
  {
    end: false,
    img: "/background/blurry-black-purple.svg",
    thumbnailTitle: "Healthcare",
    title: "Transforming Healthcare with Technology",
    description: `We've revolutionized healthcare through cutting-edge digital solutions for leading medical institutions.
              Our work includes developing AI-powered diagnostic tools, secure patient management systems, telemedicine platforms, and HIPAA-compliant cloud infrastructure. 
              We've streamlined clinical workflows, enhanced patient engagement, and enabled real-time health monitoring through IoT integration.
              Our healthcare solutions have improved patient outcomes while reducing operational costs by 40%.`
  },
  {
    end: true,
    img: "/background/blurry-800-700.svg",
    thumbnailTitle: "FinTech",
    title: "Securing Financial Innovation",
    description: `We've empowered financial institutions with robust, scalable technology solutions that drive digital transformation.
              Our expertise spans blockchain development, payment gateway integration, AI-driven fraud detection, and regulatory compliance systems.
              We've built secure trading platforms, mobile banking applications, and automated investment advisory tools.
              Our FinTech solutions have processed over $10M in transactions while maintaining 99.9% uptime and zero security breaches.`
  },
  {
    end: false,
    img: "/background/blurry-gradient-haikei.svg",
    thumbnailTitle: "E-commerce",
    title: "Scaling E-commerce Success",
    description: `We've accelerated growth for e-commerce leaders through innovative digital platforms and data-driven insights.
              Our solutions include multi-vendor marketplaces, AI-powered recommendation engines, inventory management systems, and omnichannel customer experiences.
              We've integrated advanced analytics, automated supply chain optimization, and personalized shopping experiences.
              Our e-commerce platforms have increased conversion rates by 65% and reduced cart abandonment by 45%.`
  },
  {
    end: true,
    img: "/background/blurry-800-600.svg",
    thumbnailTitle: "Education",
    title: "Empowering Education with Technology",
    description: `We've transformed educational institutions with comprehensive digital learning ecosystems and smart campus solutions.
              Our work includes developing LMS platforms, virtual classroom technologies, AI-powered assessment tools, and student information systems.
              We've created interactive learning modules, real-time collaboration tools, and personalized learning paths.
              Our EdTech solutions have improved student engagement by 80% and streamlined administrative processes across 200+ institutions`
  
  },
  {
    end: false,
    img: "/background/blurry-800-500.svg",
    thumbnailTitle: "Real Estate",
    title: "Revolutionizing Real Estate with Digital Solutions",
    description: `We've transformed the real estate industry with innovative PropTech solutions and intelligent property management systems.
              Our developments include virtual property tours, AI-powered valuation models, CRM systems, and blockchain-based transactions.
              We've created smart building management systems, tenant portals, and automated leasing workflows.
              Our real estate platforms have accelerated property sales by 60% and reduced operational costs by 30%.`
  },
];

const ScrollProductCard = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center bg-gradient-to-b from-xdas-purple-800 to-black p-4 lg:p-8">
        <h1 className="w-full text-center font-serif text-2xl text-white sm:text-3xl md:text-4xl lg:w-[60%] lg:text-left xl:w-[40%]">
        Where innovation meets excellence, XDAS Technology stands as the beacon of digital transformation. 
          We craft tomorrow's solutions with today's vision, turning complex challenges into elegant code. 
          From healthcare to fintech, from startups to enterprises, we bridge the gap between imagination and reality. 
          With every line of code, we don't just build software—we architect the future, one breakthrough at a time.
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