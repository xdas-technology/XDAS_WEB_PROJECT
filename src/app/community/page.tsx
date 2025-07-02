'use client';
import { useState } from 'react';
import Header from '@/component/Header';
import PageHero from '@/component/common/PageHero';

export default function Community() {
    const [selectedTab, setSelectedTab] = useState('events');
    const [emailSubscription, setEmailSubscription] = useState('');

    const communityStats = [
        { number: "500+", label: "Community Members", icon: "👥" },
        { number: "20+", label: "Tech Events Hosted", icon: "🎯" },
        { number: "5+", label: "Open Source Projects", icon: "💻" },
        { number: "24/7", label: "Community Support", icon: "🔧" }
    ];

    const upcomingEvents = [
        {
            title: "AI & Machine Learning Workshop",
            type: "Workshop",
            description: "Hands-on workshop covering the latest AI trends and practical implementations.",
            participants: 150,
            status: "Open"
        },
        {
            title: "Full Stack Development Bootcamp",
            type: "Bootcamp",
            description: "Intensive bootcamp covering React, Node.js, and modern development practices.",
            participants: 200,
            status: "Few Spots Left"
        },
        {
            title: "Cloud Architecture Masterclass",
            type: "Masterclass",
            description: "Deep dive into cloud architecture patterns and best practices with AWS.",
            participants: 100,
            status: "Open"
        },
        {
            title: "Open Source Contribution Drive",
            type: "Hackathon",
            description: "Contribute to XDAS open source projects and win exciting prizes.",
            participants: 300,
            status: "Registration Open"
        }
    ];

    const openSourceProjects = [
        {
            name: "XDAS UI Kit",
            description: "A comprehensive React UI component library with modern design principles.",
            language: "TypeScript",
            contributors: 25
        },
        {
            name: "CloudSync",
            description: "Automated cloud deployment and synchronization tool for modern applications.",
            language: "Python",
            contributors: 15
        },
        {
            name: "DataFlow Engine",
            description: "Real-time data processing and analytics engine for enterprise applications.",
            language: "JavaScript",
            contributors: 20
        },
        {
            name: "SecureAPI",
            description: "Security-first API framework with built-in authentication and rate limiting.",
            language: "Node.js",
            contributors: 12
        }
    ];

    const communityChannels = [
        {
            name: "Discord Server",
            description: "Join our active Discord community for real-time discussions and support.",
            icon: "💬",
            link: "https://discord.gg/xdas-tech"
        },
        {
            name: "GitHub Organization",
            description: "Contribute to our open source projects and collaborate with developers.",
            icon: "🐱",
            link: "https://github.com/xdas-technology"
        },
        {
            name: "LinkedIn Group",
            description: "Professional networking and career opportunities in tech , recent skills",
            icon: "💼",
            link: "https://www.linkedin.com/company/xdas-technology/?viewAsMember=true"
        },
        {
            name: "YouTube Channel",
            description: "Technical tutorials, webinars, and industry insights , updates of tech world",
            icon: "📺",
            link: "https://youtube.com/@xdastechnology"
        }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (emailSubscription) {
            alert('Thank you for subscribing to XDAS Community updates!');
            setEmailSubscription('');
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <PageHero 
                title="XDAS Technology Community" 
                subtitle="Connect, Learn, and Grow with Developers Worldwide"
            />
            
            <div className="container mx-auto px-6 py-16">
                {/* Community Stats */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Join Our Thriving Community
                        </h2>
                        <p className="text-gray-300 text-lg">Be part of a global network of passionate developers and innovators</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {communityStats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community Channels */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Connect With Us
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {communityChannels.map((channel, index) => (
                            <div key={index} className="group">
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 text-center h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4">{channel.icon}</div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{channel.name}</h3>
                                        <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                                        {channel.members && (
                                            <p className="text-purple-400 font-semibold mb-4">{channel.members} members</p>
                                        )}
                                        <button
                                            onClick={() => window.open(channel.link, '_blank')}
                                            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
                                        >
                                            Join Now
                                        </button>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community Content Tabs */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Community Activities
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { id: 'events', label: 'Upcoming Events', icon: '📅' },
                                { id: 'projects', label: 'Open Source', icon: '🛠️' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedTab(tab.id)}
                                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        selectedTab === tab.id 
                                            ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Events Tab */}
                    {selectedTab === 'events' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="group">
                                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    event.status === 'Open' ? 'bg-green-600 text-white' :
                                                    event.status === 'Few Spots Left' ? 'bg-yellow-600 text-white' :
                                                    'bg-blue-600 text-white'
                                                }`}>
                                                    {event.status}
                                                </span>
                                                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                                            <p className="text-gray-300 mb-4">{event.description}</p>
                                            <div className="space-y-2 text-sm text-gray-400 mb-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">👥</span>
                                                    {event.participants} participants expected
                                                </div>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                                                Register Now
                                            </button>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Open Source Projects Tab */}
                    {selectedTab === 'projects' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {openSourceProjects.map((project, index) => (
                                <div key={index} className="group">
                                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                                                    {project.language}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 mb-6">{project.description}</p>
                                            <div className="flex justify-center text-sm text-gray-400 mb-6">
                                                <span className="flex items-center">
                                                    <span className="mr-1">👥</span>
                                                    {project.contributors} contributors
                                                </span>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                                                    View Project
                                                </button>
                                                <button className="flex-1 border-2 border-purple-500 text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                                                    Contribute
                                                </button>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Newsletter Subscription */}
                <section className="mb-16">
                    <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 p-12 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl font-bold mb-4 text-white">Stay Updated</h2>
                            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                                Get the latest community updates, event announcements, and exclusive content delivered to your inbox.
                            </p>
                            <form
                                onSubmit={handleSubscribe}
                                className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                            >
                                <input
                                type="email"
                                value={emailSubscription}
                                onChange={(e) => setEmailSubscription(e.target.value)}
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                                required
                                />
                                <button
                                type="submit"
                                className="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                                >
                                Subscribe
                                </button>
                            </form>
                            <p className="text-purple-200 text-sm mt-4">
                                Join 8,000+ developers already subscribed
                            </p>
                        </div>

                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-12 rounded-2xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-2xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                Ready to Join Our Community?
                            </h2>
                            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                                Connect with like-minded developers, contribute to open source projects, and grow your skills with XDAS Technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => window.open('https://discord.gg/xdas-tech', '_blank')}
                                    className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    🚀 Join Discord Community
                                </button>
                                <button 
                                    onClick={() => window.open('https://github.com/xdas-technology', '_blank')}
                                    className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    💻 Explore GitHub
                                </button>
                            </div>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="text-purple-400">
                                    <div className="font-bold text-2xl">🎯</div>
                                    <div className="text-sm">Free Events</div>
                                </div>
                                <div className="text-purple-400">
                                    <div className="font-bold text-2xl">🤝</div>
                                    <div className="text-sm">Mentorship</div>
                                </div>
                                <div className="text-purple-400">
                                    <div className="font-bold text-2xl">🏆</div>
                                    <div className="text-sm">Competitions</div>
                                </div>
                                <div className="text-purple-400">
                                    <div className="font-bold text-2xl">📚</div>
                                    <div className="text-sm">Learning Resources</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}