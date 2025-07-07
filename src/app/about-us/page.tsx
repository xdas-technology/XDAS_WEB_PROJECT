import Header from '@/component/Header';
import PageHero from '@/component/common/PageHero';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <PageHero 
                title="About XDAS Technology" 
                subtitle="Engineered for Excellence . Trusted for Reliability"
            />
            
            <div className="container mx-auto px-6 py-16">
                {/* Our Story Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-300 mb-4">
                                XDAS Technology was founded with a vision to transform businesses through innovative technology solutions. 
                                We believe in the power of data and technology to drive meaningful change.
                            </p>
                            <p className="text-lg text-gray-300">
                                Our team of experts combines deep technical knowledge with industry experience to deliver 
                                solutions that not only meet today&apos;s challenges but anticipate tomorrow&apos;s opportunities.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-400 to-purple-800 opacity-80"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">Innovation Driven</h3>
                                    <p className="text-lg text-white/90 drop-shadow">Building the future today</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                <div className="relative z-10">
                                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
                                    <p className="text-gray-300">Continuously pushing boundaries to create breakthrough solutions</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                            </div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-300/5 rounded-xl"></div>
                                <div className="relative z-10">
                                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
                                    <p className="text-gray-300">Working together to achieve extraordinary results</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                            </div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                                <div className="relative z-10">
                                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
                                    <p className="text-gray-300">Delivering quality solutions that exceed expectations</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                                {/* What We Do Section */}
                                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        What We Do
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Web Development</h3>
                                <p className="text-gray-300">
                                    We create modern, responsive websites using cutting-edge technologies like React, Next.js, 
                                    and Node.js to deliver exceptional user experiences.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Web App Development</h3>
                                <p className="text-gray-300">
                                    Build powerful web applications with complex functionality, real-time features, 
                                    and seamless integrations for enhanced business operations.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">App Development</h3>
                                <p className="text-gray-300">
                                    Develop native and cross-platform mobile applications for iOS and Android 
                                    using React Native, Flutter, and native technologies.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Chatbot Development</h3>
                                <p className="text-gray-300">
                                    Create intelligent chatbots and AI assistants to automate customer support, 
                                    enhance user engagement, and streamline business processes.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Data Analytics</h3>
                                <p className="text-gray-300">
                                    Transform your raw data into meaningful insights with our advanced analytics solutions, 
                                    machine learning algorithms, and business intelligence tools.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Cloud Solutions</h3>
                                <p className="text-gray-300">
                                    Migrate your infrastructure to the cloud with our comprehensive DevOps and cloud architecture services, 
                                    ensuring scalability and reliability.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                    </div>
                </section>
               

                       
                      


                {/* Mission & Vision Section */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Our Mission</h3>
                                <p className="text-gray-300 text-lg">
                                    To empower businesses with innovative technology solutions that drive growth, 
                                    efficiency, and competitive advantage in the digital age.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>

                        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Our Vision</h3>
                                <p className="text-gray-300 text-lg">
                                    To be the leading technology partner for businesses worldwide, recognized for our 
                                    innovation, reliability, and commitment to excellence.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
              

{/* Team Section */}
<section className="mb-16">
    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent text-center">
        Meet Our Leadership
    </h2>
    <div className="grid md:grid-cols-2 gap-12 justify-center">
        {/* COO Card - Left */}
        <div className="group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-purple-300/5 rounded-xl"></div>
                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-full border-2 border-purple-500 shadow-lg">
                        <Image
                            src="/team/divyansh-mishra.jpg"
                            alt="COO Name"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">COO Name</h3>
                    <p className="text-purple-400 mb-2 font-medium">Chief Operating Officer</p>
                    <p className="text-sm text-gray-400">Driving operational excellence and business growth.</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
        </div>
        {/* CTO Card - Right */}
        <div className="group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-xl shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-purple-300/5 rounded-xl"></div>
                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-full border-2 border-purple-500 shadow-lg">
                        <Image
                            src="/team/aleeza.jpg"
                            alt="CTO Name"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">CTO Name</h3>
                    <p className="text-purple-400 mb-2 font-medium">Chief Technology Officer</p>
                    <p className="text-sm text-gray-400">Leading technology strategy and innovation.</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
        </div>
    </div>
</section>

            </div>
        </div>
                    
                
           
     
    );
}