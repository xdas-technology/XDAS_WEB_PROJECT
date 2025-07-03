'use client';
import { useState } from 'react';
import Header from '@/component/Header';
import PageHero from '@/component/common/PageHero';

export default function Help() {
    const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('general');
    const [searchQuery, setSearchQuery] = useState('');

    const faqCategories = {
        general: {
            title: "General Questions",
            icon: "❓",
            faqs: [
                {
                    question: "What services does XDAS Technology offer?",
                    answer: "We offer comprehensive software development services including web development, mobile app development, AI & chatbot solutions, cloud & DevOps, blockchain development, and custom software solutions."
                },
                {
                    question: "How long does it take to complete a project?",
                    answer: "Project timelines vary based on complexity. Simple projects take 2-4 weeks, medium complexity projects take 6-12 weeks, and enterprise solutions can take 3-6 months or more."
                },
                {
                    question: "Do you work with international clients?",
                    answer: "Yes, we work with clients globally. We have experience working across different time zones and provide 24/7 support for international projects."
                },
                {
                    question: "What technologies do you use?",
                    answer: "We use cutting-edge technologies including React, Next.js, Node.js, Flutter, React Native, Python, AWS, Azure, and many more based on project requirements."
                }
            ]
        },
        pricing: {
            title: "Pricing & Payment",
            icon: "💰",
            faqs: [
                {
                    question: "How do you calculate project costs?",
                    answer: "We use our AI-powered pricing calculator that considers project complexity, timeline, features, and team size. You can get an instant estimate on our pricing page."
                },
                {
                    question: "Do you offer fixed-price projects?",
                    answer: "Yes, we offer both fixed-price and hourly billing models. Fixed-price is recommended for well-defined projects with clear requirements."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept bank transfers, PayPal, Stripe, and cryptocurrency payments. Payment terms are typically 50% upfront and 50% on completion."
                },
                {
                    question: "Do you provide free estimates?",
                    answer: "Yes, we provide free project estimates and consultations. Use our pricing calculator or contact us directly for a detailed quote."
                }
            ]
        },
        technical: {
            title: "Technical Support",
            icon: "🔧",
            faqs: [
                {
                    question: "Do you provide post-launch support?",
                    answer: "Yes, we provide 3 months of free support and maintenance. We also offer extended support plans for ongoing maintenance and updates."
                },
                {
                    question: "Can you help with existing projects?",
                    answer: "Absolutely! We can take over existing projects, provide bug fixes, add new features, or optimize performance of your current applications."
                },
                {
                    question: "Do you offer hosting services?",
                    answer: "We can help you choose and set up hosting solutions on AWS, Azure, Google Cloud, or other platforms. We also provide managed hosting services."
                },
                {
                    question: "What about data security and privacy?",
                    answer: "We follow industry best practices for security, sign NDAs, and implement robust security measures. All projects are protected with enterprise-grade security protocols."
                }
            ]
        },
        process: {
            title: "Development Process",
            icon: "⚙️",
            faqs: [
                {
                    question: "What is your development process?",
                    answer: "We follow an agile methodology: Discovery → Planning → Design → Development → Testing → Deployment → Support. You'll have regular updates and demos."
                },
                {
                    question: "Can I see progress during development?",
                    answer: "Yes! We provide regular updates, demo sessions, and access to staging environments so you can track progress throughout the development cycle."
                },
                {
                    question: "Do you provide source code?",
                    answer: "Yes, you get complete ownership of the source code, documentation, and all project assets upon final payment completion."
                },
                {
                    question: "Can I request changes during development?",
                    answer: "Yes, we accommodate reasonable changes during development. Major scope changes may affect timeline and budget, which we'll discuss transparently."
                }
            ]
        }
    };
    

    const contactMethods = [
        {
            title: "Email Support",
            description: "Get detailed help via email",
            icon: "📧",
            action: () => window.location.href = 'mailto:xdas.tech@gmail.com?subject=Help Request&body=Hi XDAS Team, I need help with...',
            buttonText: "Send Email",
            info: "xdas.tech@gmail.com"
        },
        {
            title: "Phone Support",
            description: "Call us directly for immediate assistance",
            icon: "📞",
            action: () => window.location.href = 'tel:+916388037374',
            buttonText: "Call Now",
            info: "+91 6388037374"
        },
        {
            title: "WhatsApp",
            description: "Quick chat on WhatsApp",
            icon: "💬",
            action: () => window.open('https://wa.me/916388037374?text=Hi XDAS Team, I need help with...', '_blank'),
            buttonText: "Chat on WhatsApp",
            info: "+91 6388037374"
        },
        {
            title: "Schedule Call",
            description: "Book a free consultation call",
            icon: "📅",
            action: () => window.location.href = 'mailto:xdas.tech@gmail.com?subject=Schedule Consultation&body=I would like to schedule a consultation call. My preferred time slots are...',
            buttonText: "Schedule Now",
            info: "Free 30-min consultation"
        }
    ];
    type FAQCategory = keyof typeof faqCategories;
    
    const filteredFAQs = faqCategories[selectedCategory].faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <PageHero 
                title="Help & Support Center" 
                subtitle="Get instant help, find answers, and connect with our expert team"
            />
            
            <div className="container mx-auto px-6 py-16">
                {/* Quick Contact Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Need Immediate Help?
                        </h2>
                        <p className="text-gray-300 text-lg">Choose your preferred way to get in touch with our team</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 text-center h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4">{method.icon}</div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{method.title}</h3>
                                        <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
                                        <p className="text-purple-400 text-sm mb-4 font-medium">{method.info}</p>
                                        <button
                                            onClick={method.action}
                                            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
                                        >
                                            {method.buttonText}
                                        </button>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Emergency Contact Banner */}
                <section className="mb-16">
                    <div className="relative bg-gradient-to-r from-red-900 to-purple-900 p-6 rounded-xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">🚨 Urgent Support Needed?</h3>
                            <p className="text-red-100 mb-4">For critical issues affecting your live application</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = 'tel:+916388037374'}
                                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    📞 Emergency Call: +91 6388037374
                                </button>
                                <button
                                    onClick={() => window.location.href = 'mailto:xdas.tech@gmail.com?subject=URGENT: Critical Issue&body=URGENT: I have a critical issue that needs immediate attention...'}
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-900 transition-all duration-300"
                                >
                                    📧 Emergency Email
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Search */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">Find quick answers to common questions</p>
                        
                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mb-8">
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-4 pl-12 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                            />
                            <svg className="absolute left-4 top-4 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* FAQ Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {Object.entries(faqCategories).map(([key, category]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key as FAQCategory)}
                                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    selectedCategory === key 
                                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq, index) => (
                                <div key={index} className="group">
                                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                        <div className="relative z-10 p-6">
                                            <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                                <p className="text-gray-500 mt-2">Try a different search term or contact us directly.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Support Hours */}
                <section className="mb-16">
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                Support Hours & Response Times
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl mb-2">🕐</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                                    <p className="text-gray-300">Mon-Fri: 9 AM - 6 PM IST</p>
                                    <p className="text-gray-300">Sat: 10 AM - 2 PM IST</p>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">⚡</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                                    <p className="text-gray-300">Email: Within 2-4 hours</p>
                                    <p className="text-gray-300">Phone: Immediate</p>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">🆘</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                                    <p className="text-gray-300">24/7 for critical issues</p>
                                    <p className="text-gray-300">Available for all clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Still Need Help */}
                <section className="text-center">
                    <div className="relative bg-gradient-to-br from-purple-900 to-purple-700 p-12 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 text-white">Still Need Help?</h2>
                            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                                Can&apos;t find what you&apos;re looking for? Our expert support team is ready to assist you personally.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = 'mailto:xdas.tech@gmail.com?subject=Help Request&body=Hi XDAS Team,%0A%0AI need help with:%0A%0A[Please describe your issue here]%0A%0AThanks!'}
                                    className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    📧 Email Our Team
                                </button>
                                <button
                                    onClick={() => window.location.href = 'tel:+916388037374'}
                                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    📞 Call +91 6388037374
                                </button>
                            </div>
                            <div className="mt-8 text-purple-200">
                                <p className="text-sm">Average response time: 2-4 hours | 24/7 emergency support available</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}