"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Observer } from "gsap/all";
import { useRef, useState } from "react";
gsap.registerPlugin(Observer);

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(() => {
        const pl = gsap.to(headerRef.current,
            {
                top: -(headerRef.current?.offsetHeight || 0),
                duration: 0.7,
                paused: true,
            }
        );

        const ob = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => pl.reverse(),
            onUp: () => pl.play(),
            tolerance: 10,
            preventDefault: false
        });

        return () => {
            ob.kill();
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div ref={headerRef} className="sticky h-[4rem] top-0 z-30 w-full">
            <div className="h-full bg-black text-gray-300 flex items-center justify-between px-4">
                <img className="h-8 m-3" src="XDAS" alt="XDAS" /> 

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex m-3 space-x-6">
                    <a href='#' className="hover:text-white transition-colors duration-200">Service</a>
                    <a href='#' className="hover:text-white transition-colors duration-200">About Us</a>
                    <a href='#' className="hover:text-white transition-colors duration-200">Help</a>
                    <a href='#' className="hover:text-white transition-colors duration-200">Pricing</a>
                    <a href='#' className="hover:text-white transition-colors duration-200">Community</a>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black text-gray-300 flex flex-col items-center py-4 space-y-4">
                    <a href='#' className="hover:text-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Service</a>
                    <a href='#' className="hover:text-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href='#' className="hover:text-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Help</a>
                    <a href='#' className="hover:text-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <a href='#' className="hover:text-white transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Community</a>
                </div>
            )}
        </div>
    );
}

export default Header;