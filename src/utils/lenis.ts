export * from "lenis/react"
// "use client";
// import React, { JSX, useEffect, useRef } from 'react'; 
// import { gsap } from 'gsap';
// import { ReactLenis, type LenisRef } from 'lenis/react'; 

// export function LenisScroll() { // Corrected hook signature
//   const lenisRef = useRef<LenisRef>(null);

//   useEffect(() => {
//     const update = (time: number): void => {
//       lenisRef.current?.lenis?.raf(time * 1000);
//     };

//     if (typeof window !== 'undefined') {
//       gsap.ticker.add(update);
//     }

//     return () => {
//       if (typeof window !== 'undefined') {
//         gsap.ticker.remove(update);
//       }
//     };
//   }, []);

//   return (
//     <>
//     <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
//     </>
    
//   );
// }