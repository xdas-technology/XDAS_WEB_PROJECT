"use client"
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { TextPlugin } from 'gsap/TextPlugin';
import { Euler } from 'three';

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);
interface GltfModelProps {
  modelPath: string;
  scale: number[];
  position: number[] ;
  rotation: [number, number, number] | Euler;
}
interface ModelAndSceneLogicProps {
  scrollProgress:number
}

function GltfModel({ modelPath, scale, position, rotation }:GltfModelProps) {
  const gltf = useGLTF(modelPath);

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

function ModelAndSceneLogic( {scrollProgress}:ModelAndSceneLogicProps ) {
  const { viewport } = useThree();

  const baseScaleFactor = viewport.width < 768 ? 15 : (viewport.width < 1024 ? 25 : 30);
  const growthFactor = 2;
  const dynamicScale = baseScaleFactor * (1 + scrollProgress * growthFactor);

  const modelScale = [dynamicScale, dynamicScale, dynamicScale];
  const modelPosition = viewport.width < 768 ? [0, 50, 0] : [0, 70, 0];

  const modelUrl = "/result.gltf";

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />

      <GltfModel
        modelPath={modelUrl}
        scale={modelScale}
        position={modelPosition}
        rotation={[Math.PI / 180 * 45, (scrollProgress * Math.PI * 2), 0]}
      />
    </>
  );
}

function Experience() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const xdasRef = useRef(null);
  const prologueTextRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const newPrologueText = "We excel in crafting high-quality software solutions tailored to your needs. From intuitive web platforms and engaging mobile applications to comprehensive educational PC software, our expertise spans the full spectrum of software development, ensuring innovative and reliable products every time.";

  useGSAP(() => {
    if (!canvasRef.current || !heroRef.current || !prologueTextRef.current || !xdasRef.current) {
      console.warn("One or more refs are null, animations might not initialize.");
      return;
    }
    const responsiveSize = (a: string, b: string): string => {
      if (window.innerWidth < 768) {
        return a;
      } else {
        return b;
      }
    };
    const elem = canvasRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      }
    });

    tl.to(elem, {
      y: '100vh',
      x: responsiveSize('0px','25vw'),
      duration: 1,
      ease: 'none',
    }, 0);

    tl.to(prologueTextRef.current, {
      x:  responsiveSize('0px',"-50vw"),
      y: responsiveSize('75vh','100vh'),
      duration: 1,
      ease: 'none',
    }, 0);

    tl.to(prologueTextRef.current, {
      duration: 1.5,
      text: {
        value: newPrologueText,
      }
    }, 0);

    const textTl = gsap.timeline();
    const splitText = new SplitText(xdasRef.current, { type: 'chars' });
    const chars = splitText.chars;

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&';
    const originalTextContent = xdasRef.current.dataset.originalText || '';

    gsap.set(chars, {
      y: '100%',
      opacity: 0,
      onComplete: () => {
        chars.forEach((char) => {
          char.textContent = randomChars[Math.floor(Math.random() * randomChars.length)];
        });
      },
    });

    textTl.to(chars, {
      duration: 2,
      y: '0%',
      opacity: 1,
      ease: 'expo.out',
      stagger: {
        each: 0.2,
        onComplete: function (this:gsap.core.Tween) {
          
          const targetChar = this.targets()[0] as HTMLElement;
          const index = chars.indexOf(targetChar);
          if (originalTextContent && index < originalTextContent.length) {
            targetChar.textContent = originalTextContent[index];
          }
        },
        onUpdate: function (this:gsap.core.Tween) {
          
          const progress = this.progress();
          const targetChar = this.targets()[0] as HTMLElement;
          const index = chars.indexOf(targetChar);

          if (originalTextContent && index < originalTextContent.length) {
            const finalChar = originalTextContent[index];
            if (progress < 0.7) {
              targetChar.textContent = randomChars[Math.floor(Math.random() * randomChars.length)];
            } else {
              targetChar.textContent = finalChar;
            }
          }
        }
      },
    });
  }, []);

  return (
    <>
      <Canvas
        ref={canvasRef}
        style={{
          background: 'transparent',
          position: 'absolute',
          margin: 'auto',
          width: '100%',
          height: '200vh',
          zIndex: 10,
          pointerEvents: 'none',
        }}
        gl={{ alpha: true }}
        camera={{
          position: [0, 0, 100],
          fov: 100
        }}
      >
        <Suspense fallback={null}>
          <ModelAndSceneLogic scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
      <div
        ref={heroRef}
        className="h-[200vh] w-[100%] bg-black text-white text-center"
      >
        <div
          className="w-full h-[100vh] flex flex-col md:flex-row justify-center items-center p-4 md:p-8 lg:p-16 gap-8"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[25vh] overflow-hidden leading-none"
            ref={xdasRef}
            data-original-text="XDAS"
          >
            XDAS
          </h1>
          <div
            ref={prologueTextRef}
            className="w-full max-w-md md:w-1/2 lg:w-[20vw] text-base md:text-xl lg:text-2xl text-justify"
          >
            What's past is prologue; what to come, in yours and my discharge, lies rich in hope.
          </div>
        </div>
      </div>
    </>
  );
}

function ThreeDHero() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300 text-xl">Loading 3D experience...</div>}>
      <Experience />
    </Suspense>
  );
}

export default ThreeDHero;
