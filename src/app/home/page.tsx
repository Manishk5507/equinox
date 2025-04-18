'use client';
import Image from "next/image";
import React from "react";
import homePage from "@/constants/home_page";
import { sponsors } from "@/constants/sponsors";
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
          <div className="w-full p-10 text-center font-young-serif md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
            <p className="md:text-lg lg:text-xl xl:text-2xl">{homePage.para1}</p>
          </div>
          <div className="w-full p-10 text-center font-young-serif md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%]">
            <p className="md:text-lg lg:text-xl xl:text-2xl">{homePage.para2}</p>
          </div>
        </section>
        <section className="min-h-[120vh] w-full relative bg-black flex flex-col items-center justify-start">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/compass.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
            <div className="w-full flex flex-col items-center justify-center py-10 space-y-8">
            <h2 className="font-atelier text-2xl md:text-3xl text-center mb-6">Our Sponsors</h2>
            
            <div className="w-full flex flex-col items-center space-y-10">
              {/* Premium Sponsors */}
              <div className="w-full max-w-6xl">
              <p className="font-atelier text-xl text-center mb-4 text-[#EAE3BA]">Premium Sponsors</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {sponsors[0].images.map((image, index) => (
                <div key={index} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative flex items-center justify-center">
                  <Image
                  src={image}
                  alt={`${sponsors[0].title} sponsor ${index + 1}`}
                  width={144}
                  height={144}
                  className="object-contain"
                  />
                </div>
                ))}
              </div>
              </div>

              {/* Gold Sponsors */}
              <div className="w-full max-w-6xl">
              <p className="font-atelier text-xl text-center mb-4 text-[#D4AF37]">Gold Sponsors</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {sponsors[1].images.map((image, index) => (
                <div key={index} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative flex items-center justify-center">
                  <Image
                  src={image}
                  alt={`${sponsors[1].title} sponsor ${index + 1}`}
                  width={144}
                  height={144}
                  className="object-contain"
                  />
                </div>
                ))}
              </div>
              </div>

              {/* Silver Sponsors */}
              <div className="w-full max-w-6xl">
              <p className="font-atelier text-xl text-center mb-4 text-[#C0C0C0]">Silver Sponsors</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {sponsors[2].images.map((image, index) => (
                <div key={index} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative flex items-center justify-center">
                  <Image
                  src={image}
                  alt={`${sponsors[2].title} sponsor ${index + 1}`}
                  width={144}
                  height={144}
                  className="object-contain"
                  />
                </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
