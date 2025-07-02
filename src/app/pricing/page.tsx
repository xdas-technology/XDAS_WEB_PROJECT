'use client';
import { useState } from 'react';
import Header from '@/component/Header';
import PageHero from '@/component/common/PageHero';

export default function Pricing() {
    const [selectedCategory, setSelectedCategory] = useState('web');
    const [projectType, setProjectType] = useState('');
    const [complexity, setComplexity] = useState('');
    const [features, setFeatures] = useState([]);
    const [timeline, setTimeline] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [estimatedPrice, setEstimatedPrice] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const currencies = {
        USD: { symbol: '$', rate: 1, name: 'US Dollar' },
        INR: { symbol: '₹', rate: 83, name: 'Indian Rupee' },
        EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
        GBP: { symbol: '£', rate: 0.79, name: 'British Pound' },
        CAD: { symbol: 'C$', rate: 1.36, name: 'Canadian Dollar' },
        AUD: { symbol: 'A$', rate: 1.52, name: 'Australian Dollar' },
        JPY: { symbol: '¥', rate: 150, name: 'Japanese Yen' },
        CHF: { symbol: 'CHF', rate: 0.88, name: 'Swiss Franc' },
        SGD: { symbol: 'S$', rate: 1.34, name: 'Singapore Dollar' },
        AED: { symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' }
    };

    const pricingCategories = {
        web: {
            title: "Web Development",
            icon: "🌐",
            services: [
                {
                    name: "Landing Page",
                    description: "Single page website with modern design",
                    price: { min: 300, max: 1500 },
                    features: ["Responsive Design", "SEO Optimized", "Contact Form", "Basic Analytics", "Mobile Friendly"]
                },
                {
                    name: "Business Website",
                    description: "Multi-page corporate website",
                    price: { min: 500, max: 5000 },
                    features: ["5-10 Pages", "CMS Integration", "Contact Forms", "Blog Section", "SEO Package", "Admin Panel"]
                },
                {
                    name: "E-commerce Website",
                    description: "Full-featured online store",
                    price: { min: 300, max: 15000 },
                    features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Admin Panel", "Order Tracking", "Multi-vendor Support"]
                },
                {
                    name: "Custom Web Portal",
                    description: "Complex web application with custom features",
                    price: { min: 1000, max: 50000 },
                    features: ["User Management", "Dashboard", "API Integration", "Advanced Security", "Custom Features", "Real-time Updates"]
                },
                {
                    name: "Enterprise Web Platform",
                    description: "Large-scale enterprise solution",
                    price: { min: 50000, max: 200000 },
                    features: ["Microservices Architecture", "Multi-tenant", "Advanced Analytics", "Enterprise Security", "24/7 Support", "Custom Integrations"]
                }
            ]
        },
        mobile: {
            title: "Mobile App Development",
            icon: "📱",
            services: [
                {
                    name: "Simple Mobile App",
                    description: "Basic functionality app for iOS/Android",
                    price: { min: 500, max: 15000 },
                    features: ["Cross-Platform", "Basic UI/UX", "5-10 Screens", "App Store Deployment", "Push Notifications"]
                },
                {
                    name: "Business App",
                    description: "Feature-rich business application",
                    price: { min: 1000, max: 40000 },
                    features: ["Native Performance", "API Integration", "Push Notifications", "Offline Support", "Analytics", "User Authentication"]
                },
                {
                    name: "E-commerce App",
                    description: "Shopping app with payment integration",
                    price: { min: 2000, max: 60000 },
                    features: ["Product Catalog", "Payment Gateway", "User Accounts", "Order Management", "Reviews & Ratings", "Wishlist"]
                },
                {
                    name: "Social Media App",
                    description: "Social networking mobile application",
                    price: { min: 4000, max: 100000 },
                    features: ["Real-time Chat", "Media Sharing", "Social Features", "Content Management", "Live Streaming", "Advanced Security"]
                },
                {
                    name: "Enterprise App",
                    description: "Complex enterprise-grade application",
                    price: { min: 5000, max: 200000 },
                    features: ["Advanced Security", "Multi-role Access", "Real-time Sync", "Custom Integrations", "Scalable Architecture", "Enterprise Support"]
                }
            ]
        },
        ai: {
            title: "AI & Machine Learning",
            icon: "🤖",
            services: [
                {
                    name: "Basic Chatbot",
                    description: "Rule-based chatbot for customer support",
                    price: { min: 200, max: 8000 },
                    features: ["Pre-defined Responses", "Basic NLP", "Website Integration", "Analytics Dashboard", "Multi-language Support"]
                },
                {
                    name: "AI Chatbot",
                    description: "Intelligent chatbot with machine learning",
                    price: { min: 400, max: 25000 },
                    features: ["Advanced NLP", "Learning Capabilities", "Multi-platform", "Custom Training", "API Integration", "Voice Support"]
                },
                {
                    name: "Computer Vision Solution",
                    description: "Image and video processing AI",
                    price: { min: 2000, max: 80000 },
                    features: ["Object Detection", "Face Recognition", "Image Classification", "Real-time Processing", "Custom Models", "API Development"]
                },
                {
                    name: "Custom AI Solution",
                    description: "Tailored AI solution for specific needs",
                    price: { min: 2500, max: 100000 },
                    features: ["Custom Algorithms", "Data Analysis", "Predictive Models", "API Development", "Ongoing Support", "Model Training"]
                },
                {
                    name: "Enterprise AI Platform",
                    description: "Comprehensive AI ecosystem",
                    price: { min: 10000, max: 500000 },
                    features: ["Multi-model Support", "Scalable Infrastructure", "Real-time Processing", "Advanced Analytics", "24/7 Support", "Custom Research"]
                }
            ]
        },
        cloud: {
            title: "Cloud & DevOps",
            icon: "☁️",
            services: [
                {
                    name: "Cloud Migration",
                    description: "Move existing systems to cloud",
                    price: { min: 500, max: 20000 },
                    features: ["Infrastructure Assessment", "Migration Strategy", "Data Transfer", "Testing & Validation", "Performance Optimization"]
                },
                {
                    name: "DevOps Setup",
                    description: "CI/CD pipeline and automation",
                    price: { min: 800, max: 30000 },
                    features: ["Pipeline Setup", "Automated Testing", "Deployment Automation", "Monitoring Tools", "Security Integration"]
                },
                {
                    name: "Cloud Architecture",
                    description: "Design scalable cloud infrastructure",
                    price: { min: 1500, max: 60000 },
                    features: ["Architecture Design", "Security Implementation", "Cost Optimization", "Performance Tuning", "Disaster Recovery"]
                },
                {
                    name: "Kubernetes Setup",
                    description: "Container orchestration platform",
                    price: { min: 2000, max: 80000 },
                    features: ["Cluster Setup", "Auto-scaling", "Service Mesh", "Monitoring", "Security Policies", "Backup Solutions"]
                }
            ]
        },
        blockchain: {
            title: "Blockchain & Web3",
            icon: "⛓️",
            services: [
                {
                    name: "Smart Contract",
                    description: "Basic smart contract development",
                    price: { min: 500, max: 20000 },
                    features: ["Contract Development", "Testing", "Deployment", "Security Audit", "Documentation"]
                },
                {
                    name: "DeFi Platform",
                    description: "Decentralized finance application",
                    price: { min: 3000, max: 150000 },
                    features: ["Smart Contracts", "Web3 Integration", "Wallet Connection", "Liquidity Pools", "Yield Farming", "Security Audits"]
                },
                {
                    name: "NFT Marketplace",
                    description: "Non-fungible token trading platform",
                    price: { min: 2500, max: 100000 },
                    features: ["NFT Minting", "Marketplace", "Auction System", "Wallet Integration", "Royalty Management", "IPFS Storage"]
                },
                {
                    name: "Cryptocurrency Exchange",
                    description: "Digital asset trading platform",
                    price: { min: 10000, max: 500000 },
                    features: ["Trading Engine", "Wallet System", "KYC/AML", "Advanced Security", "Admin Panel", "Mobile Apps"]
                }
            ]
        },
        ecommerce: {
            title: "E-commerce Solutions",
            icon: "🛒",
            services: [
                {
                    name: "Basic Online Store",
                    description: "Simple e-commerce website",
                    price: { min: 300, max: 10000 },
                    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Basic Analytics"]
                },
                {
                    name: "Advanced E-commerce",
                    description: "Feature-rich online store",
                    price: { min: 1000, max: 35000 },
                    features: ["Multi-vendor Support", "Inventory Management", "Customer Reviews", "Wishlist", "Advanced Search", "SEO Tools"]
                },
                {
                    name: "Marketplace Platform",
                    description: "Multi-vendor marketplace",
                    price: { min: 3500, max: 150000 },
                    features: ["Vendor Management", "Commission System", "Dispute Resolution", "Advanced Analytics", "Mobile App", "API Integration"]
                },
                {
                    name: "Enterprise E-commerce",
                    description: "Large-scale e-commerce solution",
                    price: { min: 10000, max: 500000 },
                    features: ["Microservices Architecture", "Global Scaling", "Enterprise Integrations", "Advanced Security", "Custom Features", "24/7 Support"]
                }
            ]
        }
    };

    const calculatePrice = () => {
        if (!projectType || !complexity || !timeline) {
            alert('Please fill all required fields');
            return;
        }

        let basePrice = 0;
        let multiplier = 1;

        // Base price calculation
        const complexityMultipliers = {
            'simple': 1,
            'medium': 1.5,
            'complex': 2.5,
            'enterprise': 4
        };

        const timelineMultipliers = {
            'rush': 1.5,
            'normal': 1,
            'flexible': 0.8
        };

        const teamSizeMultipliers = {
            'small': 1,
            'medium': 1.3,
            'large': 1.8
        };

        // Get base price from project type
        const category = pricingCategories[selectedCategory];
        const selectedService = category.services.find(service => service.name === projectType);
        
        if (selectedService) {
            basePrice = (selectedService.price.min + selectedService.price.max) / 2;
        }

        // Apply multipliers
        multiplier *= complexityMultipliers[complexity] || 1;
        multiplier *= timelineMultipliers[timeline] || 1;
        multiplier *= teamSizeMultipliers[teamSize] || 1;

        // Feature-based adjustments
        const featureBonus = features.length * 0.1; // 10% per additional feature
        multiplier += featureBonus;

        // Platform adjustments for mobile apps
        if (selectedCategory === 'mobile' && platforms.length > 1) {
            multiplier += 0.3; // 30% for multi-platform
        }

        const finalPrice = Math.round(basePrice * multiplier);
        setEstimatedPrice(finalPrice);
    };

    const formatPrice = (price) => {
        const convertedPrice = Math.round(price * currencies[selectedCurrency].rate);
        return `${currencies[selectedCurrency].symbol}${convertedPrice.toLocaleString()}`;
    };

    const formatPriceRange = (min, max) => {
        const convertedMin = Math.round(min * currencies[selectedCurrency].rate);
        const convertedMax = Math.round(max * currencies[selectedCurrency].rate);
        return `${currencies[selectedCurrency].symbol}${convertedMin.toLocaleString()} - ${currencies[selectedCurrency].symbol}${convertedMax.toLocaleString()}`;
    };

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <PageHero 
                title="Pricing & Cost Calculator" 
                subtitle="Transparent Pricing for All Your Software Development Needs"
            />
            
            <div className="container mx-auto px-6 py-16">
                {/* Currency Selector */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Select Your Preferred Currency
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {Object.entries(currencies).map(([code, currency]) => (
                            <button
                                key={code}
                                onClick={() => setSelectedCurrency(code)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCurrency === code 
                                        ? 'bg-purple-600 text-white' 
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {code} ({currency.symbol})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Service Categories */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Our Service Pricing
                    </h2>
                    
                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.entries(pricingCategories).map(([key, category]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key)}
                                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    selectedCategory === key 
                                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                <span className="mr-2 text-xl">{category.icon}</span>
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingCategories[selectedCategory].services.map((service, index) => (
                            <div key={index} className="group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                                        <p className="text-gray-300 mb-4">{service.description}</p>
                                        <div className="text-2xl font-bold text-purple-400 mb-6">
                                            {formatPriceRange(service.price.min, service.price.max)}
                                        </div>
                                        <div className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm">
                                                    <svg className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-400">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Price Calculator */}
                <section className="mb-16">
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-2xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-2xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                🧮 AI-Powered Price Calculator
                            </h2>
                            <p className="text-center text-gray-300 mb-12 text-lg">
                                Get an instant, accurate estimate for your project using our advanced pricing algorithm
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    {/* Project Category */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Project Category *</label>
                                        <select 
                                            value={selectedCategory}
                                            onChange={(e) => {
                                                setSelectedCategory(e.target.value);
                                                setProjectType('');
                                            }}
                                            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                        >
                                            {Object.entries(pricingCategories).map(([key, category]) => (
                                                <option key={key} value={key}>{category.icon} {category.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Project Type */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Project Type *</label>
                                        <select 
                                            value={projectType}
                                            onChange={(e) => setProjectType(e.target.value)}
                                            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="">Select project type...</option>
                                            {pricingCategories[selectedCategory].services.map((service) => (
                                                <option key={service.name} value={service.name}>{service.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Complexity */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Project Complexity *</label>
                                        <select 
                                            value={complexity}
                                            onChange={(e) => setComplexity(e.target.value)}
                                            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="">Select complexity...</option>
                                            <option value="simple">Simple - Basic features, standard design</option>
                                            <option value="medium">Medium - Custom features, moderate complexity</option>
                                            <option value="complex">Complex - Advanced features, custom integrations</option>
                                            <option value="enterprise">Enterprise - Highly complex, scalable architecture</option>
                                        </select>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Timeline *</label>
                                        <select 
                                            value={timeline}
                                            onChange={(e) => setTimeline(e.target.value)}
                                            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="">Select timeline...</option>
                                            <option value="rush">Rush (2-4 weeks) - +50% premium</option>
                                            <option value="normal">Normal (6-12 weeks) - Standard pricing</option>
                                            <option value="flexible">Flexible (3-6 months) - 20% discount</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Team Size */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Team Size Preference</label>
                                        <select 
                                            value={teamSize}
                                            onChange={(e) => setTeamSize(e.target.value)}
                                            className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="">Select team size...</option>
                                            <option value="small">Small Team (2-3 developers)</option>
                                            <option value="medium">Medium Team (4-6 developers)</option>
                                            <option value="large">Large Team (7+ developers)</option>
                                        </select>
                                    </div>

                                    {/* Mobile Platforms */}
                                    {selectedCategory === 'mobile' && (
                                        <div>
                                            <label className="block text-white font-semibold mb-3">Target Platforms</label>
                                            <div className="space-y-2">
                                                {['iOS', 'Android', 'Web', 'Desktop'].map((platform) => (
                                                    <label key={platform} className="flex items-center text-gray-300">
                                                        <input
                                                            type="checkbox"
                                                            checked={platforms.includes(platform)}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setPlatforms([...platforms, platform]);
                                                                } else {
                                                                    setPlatforms(platforms.filter(p => p !== platform));
                                                                }
                                                            }}
                                                            className="mr-2 text-purple-500"
                                                        />
                                                        {platform}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Additional Features */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Additional Features</label>
                                        <div className="space-y-2 max-h-40 overflow-y-auto">
                                            {[
                                                'Advanced Analytics', 'Real-time Chat', 'Payment Integration', 
                                                'Push Notifications', 'Social Media Integration', 'Multi-language Support',
                                                'Advanced Security', 'API Integration', 'Third-party Integrations',
                                                'Custom Admin Panel', 'Advanced Search', 'AI/ML Features'
                                            ].map((feature) => (
                                                <label key={feature} className="flex items-center text-gray-300">
                                                    <input
                                                        type="checkbox"
                                                        checked={features.includes(feature)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setFeatures([...features, feature]);
                                                            } else {
                                                                setFeatures(features.filter(f => f !== feature));
                                                            }
                                                        }}
                                                        className="mr-2 text-purple-500"
                                                    />
                                                    {feature}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Calculate Button */}
                                    <button
                                        onClick={calculatePrice}
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        🔮 Calculate Project Cost
                                    </button>

                                    {/* Price Result */}
                                    {estimatedPrice && (
                                        <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg text-center">
                                            <h3 className="text-xl font-bold text-white mb-2">Estimated Project Cost</h3>
                                            <div className="text-3xl font-bold text-purple-200">
                                                {formatPrice(estimatedPrice)}
                                            </div>
                                            <p className="text-purple-200 mt-2 text-sm">
                                                *This is an estimate. Final pricing may vary based on detailed requirements.
                                            </p>
                                            <div className="mt-4 space-y-1 text-xs text-purple-300">
                                                <p>💡 Includes: Project planning, development, testing, and deployment</p>
                                                <p>🔄 3 months of free support and maintenance included</p>
                                                <p>📞 Schedule a free consultation to refine your estimate</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <div className="relative bg-gradient-to-br from-purple-900 to-purple-700 p-12 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
                            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                                Get a detailed quote with a free consultation. Our experts will help you choose the best solution for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    📞 Schedule Free Consultation - 6388037374
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
                                    📧 Get Custom Quote - xdas.tech@gmail.com
                                </button>
                            </div>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="text-purple-200">
                                    <div className="font-bold text-2xl">✅</div>
                                    <div className="text-sm">Fixed Price</div>
                                </div>
                                <div className="text-purple-200">
                                    <div className="font-bold text-2xl">🚀</div>
                                    <div className="text-sm">Fast Delivery</div>
                                </div>
                                <div className="text-purple-200">
                                    <div className="font-bold text-2xl">🔒</div>
                                    <div className="text-sm">NDA Protected</div>
                                </div>
                                <div className="text-purple-200">
                                    <div className="font-bold text-2xl">💯</div>
                                    <div className="text-sm">Quality Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}