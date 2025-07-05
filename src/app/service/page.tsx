import Header from '@/component/Header';
import PageHero from '@/component/common/PageHero';

export default function Service() {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            ),
            title: "Web Development",
            description: "Build modern, responsive websites using React, Next.js, Vue.js, and Angular with cutting-edge design and performance optimization.",
            features: ["Responsive Design", "SEO Optimization", "Performance Tuned"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
            ),
            title: "Web App Development",
            description: "Create powerful web applications with real-time features, complex functionality, and seamless user experiences.",
            features: ["Real-time Features", "Scalable Architecture", "API Integration"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
            ),
            title: "Mobile App Development",
            description: "Develop native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.",
            features: ["Cross-Platform", "Native Performance", "App Store Ready"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
            ),
            title: "AI & Chatbot Development",
            description: "Build intelligent chatbots, AI assistants, and machine learning solutions to automate and enhance business processes.",
            features: ["NLP Integration", "24/7 Automation", "Smart Analytics"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
            ),
            title: "Data Analytics & BI",
            description: "Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence tools.",
            features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
            ),
            title: "Cloud & DevOps",
            description: "Migrate to cloud, implement DevOps practices, and ensure scalable, reliable infrastructure with AWS, Azure, and GCP.",
            features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Cybersecurity",
            description: "Protect your digital assets with comprehensive security audits, penetration testing, and threat monitoring solutions.",
            features: ["Security Audits", "Threat Detection", "Compliance Management"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
            ),
            title: "E-commerce Solutions",
            description: "Build robust e-commerce platforms with payment integration, inventory management, and customer analytics.",
            features: ["Payment Gateway", "Inventory Management", "Multi-vendor Support"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            ),
            title: "Custom Software",
            description: "Develop bespoke enterprise software solutions tailored to your specific business requirements and workflows.",
            features: ["Custom Development", "Enterprise Grade", "Scalable Solutions"]
        }
    ];

    const stats = [
        { number: "50+", label: "Projects Delivered" },
        { number: "50+", label: "Happy Clients" },
        { number: "24/7", label: "Support Available" },
        { number: "99%", label: "Uptime Guaranteed" }
    ];

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <PageHero 
                title="Our Services" 
                subtitle="Complete Software Solutions for Every Business Need - From Concept to Deployment"
            />
            
            <div className="container mx-auto px-6 py-16">
                {/* Trust Indicators */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-gray-300 text-lg">Delivering excellence across every software domain</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services Grid */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Complete Software Ecosystem
                        </h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            From simple websites to complex enterprise solutions - we cover every aspect of software development with cutting-edge technologies and industry best practices.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                        <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
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

                {/* Why Choose Us */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Why Choose XDAS Technology?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-white">🚀 Cutting-Edge Technology</h3>
                                <p className="text-gray-300">We use the latest technologies and frameworks to ensure your project is future-proof and scalable.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                        
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-white">🎯 Agile Development</h3>
                                <p className="text-gray-300">Fast delivery with iterative development approach, ensuring quality and meeting deadlines consistently.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                        
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-white">🛡️ Security First</h3>
                                <p className="text-gray-300">Every solution is built with security best practices, ensuring your data and users are protected.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                        
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-white">💬 24/7 Support</h3>
                                <p className="text-gray-300">Continuous support and maintenance to ensure your applications run smoothly around the clock.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <div className="relative bg-gradient-to-br from-purple-900 to-purple-700 p-12 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
                            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                                Let&apos;s discuss your project requirements and create a solution that drives your business forward.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Get Free Consultation
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
                                    xdastechnology@gmail.com , 6388037374
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
                    </div>
                </section>
            </div>
        </div>
    );
}