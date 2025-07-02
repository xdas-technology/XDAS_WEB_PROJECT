'use client';
import { useRef, useEffect, useState } from 'react';
import StickyCards from './StickyCards';

const serviceCards = [
  {
    title: "Web Development",
    description: `Transform your digital presence with cutting-edge web solutions that captivate and convert. We craft responsive, lightning-fast websites and progressive web applications using the latest technologies like React, Next.js, and TypeScript. Our expertise spans from sleek landing pages to complex enterprise portals, ensuring seamless user experiences across all devices. We implement modern design principles, optimize for performance and SEO, and integrate powerful features like real-time analytics, payment gateways, and CMS solutions. Every line of code is meticulously crafted to deliver scalable, maintainable, and secure web applications that drive business growth and user engagement.`
  },
  {
    title: "Mobile App Development",
    description: `Bring your ideas to life with native and cross-platform mobile applications that users love. Our mobile development expertise covers iOS, Android, and hybrid solutions using React Native, Flutter, and Swift. We create intuitive, feature-rich apps that deliver exceptional performance and user experience. From concept to deployment, we handle everything: UI/UX design, backend integration, real-time features, push notifications, offline functionality, and app store optimization. Our apps leverage device capabilities like camera, GPS, biometrics, and sensors to create immersive experiences that drive engagement, retention, and business success.`
  },
  {
    title: "AI & Machine Learning",
    description: `Harness the power of artificial intelligence to revolutionize your business operations and decision-making. Our AI solutions include intelligent chatbots, predictive analytics, computer vision, natural language processing, and recommendation engines. We develop custom machine learning models using TensorFlow, PyTorch, and cloud AI services to automate processes, extract insights from data, and enhance user experiences. From data preprocessing to model deployment, we create AI systems that learn, adapt, and improve over time. Our solutions help businesses reduce costs, increase efficiency, personalize customer experiences, and unlock new revenue streams through intelligent automation.`
  },
  {
    title: "Cloud & DevOps",
    description: `Accelerate your digital transformation with robust cloud infrastructure and streamlined development workflows. We design and implement scalable cloud architectures on AWS, Azure, and Google Cloud, ensuring high availability, security, and cost optimization. Our DevOps practices include CI/CD pipelines, infrastructure as code, containerization with Docker and Kubernetes, and automated testing. We help businesses migrate to the cloud, optimize existing infrastructure, and implement monitoring and security best practices. Our solutions reduce deployment time, improve reliability, enhance security, and enable teams to focus on innovation rather than infrastructure management.`
  },
  {
    title: "Blockchain Development",
    description: `Pioneer the future of decentralized technology with secure, transparent blockchain solutions. We develop smart contracts, DeFi protocols, NFT platforms, and cryptocurrency exchanges using Ethereum, Solana, and other blockchain networks. Our expertise includes tokenization, wallet integration, consensus mechanisms, and Web3 applications. We create secure, audited smart contracts that automate business processes, reduce intermediaries, and ensure transparency. From conceptualization to deployment, we guide businesses through blockchain adoption, helping them leverage distributed ledger technology for supply chain transparency, digital identity verification, and innovative financial products.`
  },
  {
    title: "Custom Software Solutions",
    description: `Transform your unique business challenges into competitive advantages with tailor-made software solutions. We analyze your specific requirements and develop enterprise-grade applications that streamline operations, enhance productivity, and drive growth. Our custom solutions include CRM systems, ERP platforms, inventory management, workflow automation, and integration services. We use agile methodologies to ensure rapid delivery while maintaining code quality and scalability. Our team specializes in system integration, API development, database design, and legacy system modernization. Every solution is built with security, performance, and future growth in mind, ensuring long-term success and ROI.`
  }
];

const StackCard = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Dark purple gradient backgrounds with increasing intensity
  const cardGradients = [
    "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700",
    "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800", 
    "bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900",
    "bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900",
    "bg-gradient-to-br from-purple-900 via-gray-900 to-black",
    "bg-gradient-to-br from-gray-900 via-black to-black"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within this section
        const scrolled = Math.max(0, windowHeight - rect.top);
        const maxScroll = sectionHeight + windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            Our Expertise
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of technology services designed to transform your business 
            and accelerate your digital journey with cutting-edge solutions.
          </p>
        </div>
      </div>

      {/* Sticky Cards Section */}
      <div ref={sectionRef} className="relative">
        <StickyCards 
          index={0} 
          title={serviceCards[0].title} 
          description={serviceCards[0].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[0]}
          textColor="text-white"
        />
        <StickyCards 
          index={1} 
          title={serviceCards[1].title} 
          description={serviceCards[1].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[1]}
          textColor="text-white"
        />
        <StickyCards 
          index={2} 
          title={serviceCards[2].title} 
          description={serviceCards[2].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[2]}
          textColor="text-white"
        />
        <StickyCards 
          index={3} 
          title={serviceCards[3].title} 
          description={serviceCards[3].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[3]}
          textColor="text-white"
        />
        <StickyCards 
          index={4} 
          title={serviceCards[4].title} 
          description={serviceCards[4].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[4]}
          textColor="text-white"
        />
        <StickyCards 
          index={5} 
          title={serviceCards[5].title} 
          description={serviceCards[5].description} 
          scrollProgress={scrollProgress} 
          colour={cardGradients[5]}
          textColor="text-white"
        />
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden border border-purple-600/30">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-400/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Ready to Transform Your Business?
              </h3>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-300 to-white mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our expertise can drive innovation and growth for your organization. 
                From concept to deployment, we're here to make your vision a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button className="w-full sm:w-auto bg-gradient-to-r from-white to-purple-50 text-purple-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:from-purple-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Start Your Project
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  View Our Work
                </button>
              </div>
              
              {/* Additional features showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-200 mb-2">100+</div>
                  <div className="text-purple-300 text-sm sm:text-base">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-200 mb-2">99%</div>
                  <div className="text-purple-300 text-sm sm:text-base">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-200 mb-2">24/7</div>
                  <div className="text-purple-300 text-sm sm:text-base">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-200 mb-2">8+</div>
                  <div className="text-purple-300 text-sm sm:text-base">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;