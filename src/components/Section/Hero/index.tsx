import React from 'react';
import Image from 'next/image';
import BGHero from '@/assets/images/bghero.svg';
import Code from '@/assets/images/code.svg';
import HeadImg from '@/assets/images/head.svg';

export default function Hero() {
  return (
    <section>
      <div className="relative bg-black h-full md:h-[100vh] lg:h-[110vh]">
        <div className="relative py-20 z-10 h-full flex items-center  ">
          <div className="lg:px-16">
            <div className=" container mx-auto">
              <div className="max-w-4xl mx-auto text-center md:text-left p-6 lg:p-2">
                <div className="relative max-w-3xl  text-3xl lg:text-5xl font-semibold text-white">
                  <div className="absolute w-fit left-14 md:left-[-10px] lg:left-[-15px] top-[-20px]">
                    <Image src={Code} alt={'img'} width={30} />
                  </div>
                  <span className="leading-tight">
                    Make Your Own <br />
                    Website and Mobile Application <br />
                    With Nodewave
                  </span>
                  <div className="absolute w-fit right-6 md:left-[220px] lg:left-[365px] bottom-[-5px]">
                    <Image src={HeadImg} alt={'img'} width={50} />
                  </div>
                </div>

                <div className="pt-8 ">
                  <button className="bg-[#00ad98] lg:mt-0 md:mt-0 mt-4 py-2  px-4  text-white text-md lg:text-xl  rounded-full">
                    <span className="leading-tight ">Get Started Now</span>
                  </button>
                </div>

                <p className="pt-8 max-w-5xl  mb-2 text-sm lg:text-2xl text-white">
                  Create Mobile Applications and Websites for Companies or Your
                  Business Have a transparent pricing, easy and straightforward
                  development process
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-black to-black w-full h-[40vh] lg:h-[30vh]"></div>
        <div className="absolute w-full right-0 top-0">
          <Image src={BGHero} alt={'img'} width={1500} />
        </div>
      </div>
    </section>
  );
}
