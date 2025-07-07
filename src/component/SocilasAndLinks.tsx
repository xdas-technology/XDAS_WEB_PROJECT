import React, { useState } from 'react';
import Link from 'next/link';

const SocilasAndLinks = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to XDAS Technology updates!');
      setEmail('');
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            By Our Hand, the World is Reforged
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Innovation isn&apos;t just what we do—it&apos;s who we are. At XDAS Technology, 
            we transform visions into reality, one breakthrough at a time.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Industries Served</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Countries Reached</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Company</h3>
            <div className="space-y-3">
              <Link href="/about-us" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                About Us
              </Link>
              <Link href="/community" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Careers
              </Link>
              <Link href="/community" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Community
              </Link>
              <Link href="/help" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Contact Us
              </Link>
              {/* <Link href="/locations" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Locations
              </Link>
              <Link href="/sitemap" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Sitemap
              </Link> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Services</h3>
            <div className="space-y-3">
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Web Development
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Mobile Apps
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                AI Solutions
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Cloud Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Blockchain
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Pricing
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Support</h3>
            <div className="space-y-3">
              <Link href="/help" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Help Center
              </Link>
              <Link href="/about-us" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Documentation
              </Link>
              {/* <Link href="/api-reference" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                API Reference
              </Link>
              <Link href="/tutorials" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Tutorials
              </Link>
              <Link href="/status" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                System Status
              </Link> */}
              <a href="mailto:xdas.tech@gmail.com" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2">
                Email Support
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400">Connect</h3>
            <div className="space-y-4">
              <a 
                href="https://linkedin.com/company/xdas-technology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="mr-3">💼</span>
                LinkedIn
              </a>
              {/* <a 
                href="https://github.com/xdas-technology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="mr-3">🐱</span>
                GitHub
              </a> */}
              {/* <a 
                href="https://discord.gg/xdas-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="mr-3">💬</span>
                Discord
              </a>
              <a 
                href="https://youtube.com/@xdastechnology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="mr-3">📺</span>
                YouTube
              </a> */}
              <a 
                href="tel:+916388037374"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
              >
                <span className="mr-3">📞</span>
                +91 6388037374
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 p-8 rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Join the Innovation Revolution</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get exclusive insights, industry updates, and early access to our latest innovations. 
              Be part of the community that&apos;s shaping the future of technology.
            </p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-purple-200 text-sm mt-4">Join 10,000+ innovators already subscribed</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                XDAS Technology
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 XDAS Technology. All rights reserved. Engineered for Excellence, Trusted for Reliability.
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Statement
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"></div>
    </div>
  );
};

export default SocilasAndLinks;