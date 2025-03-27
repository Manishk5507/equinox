'use client';
import Image from "next/image";
import React from "react";
import homePage from "@/constants/home_page";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const HomePage = () => {
  return (
    <ParallaxProvider>
    <div className="w-full flex flex-col items-center relative justify-center 2xl:mx-auto">
      <Parallax speed={-50} className="w-full min-h-screen ">
        <section className="min-h-screen w-full relative bg-black flex flex-col items-center justify-center ">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-5 flex items-center justify-center">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] animate-[spin_20s_linear_infinite]">
              <Image
              src="/images/time_wheel.png"
              alt="Time Wheel"
              priority
              width={700}
              height={700}
              className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="z-10 text-center px-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text[9rem] 2xl:text-[10rem] font-bold text-white mb-6 font-atelier">
              Equinox
            </h1>
          </div>
        </section>
      </Parallax>
      <Parallax speed={10} className="w-full relative z-10 h-[50vh] -mt-[25vh]">
        <section className=" z-100 absolute h-screen  w-full -mt-[20vh]">
          <div className="absolute w-screen h-full ">
            <Image
              src="/images/rocksandsandcr.png"
              alt="Time Wheel"
              priority
              layout="fill"
              objectFit="contain"
              className="z-[-1]"
            />
          </div>
        </section>
      </Parallax>

      <section className="z-1 min-h-[120vh] w-full relative bg-black flex flex-col items-center justify-center -mt-[20vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/time_bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center z-10">
          <div className="text-7xl sm:text-8xl md:text-[12rem] lg:text-[10rem] my-4 select-none mx-8 drop-shadow-3xl text-center bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)] bg-clip-text text-transparent font-atelier">
            Timeless
            <br />
            Mirage
          </div>
          <div className="text-xl sm:text-3xl md:text-5xl py-8 select-none mx-8 drop-shadow-3xl text-center text-[#EAE3BA] font-atelier">
            A Journey Through Illusion
          </div>
        </div>
      </section>
      <section className="min-h-[120vh] w-full relative bg-black flex flex-col items-center justify-around">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/compass.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p>{homePage.para1}</p>
        <p>{homePage.para2}</p>
      </section>
      <section className="min-h-[120vh] w-full relative bg-black flex flex-col items-center justify-around">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/compass.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
    </ParallaxProvider>
  );
};

export default HomePage;
