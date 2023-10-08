import React, { useEffect } from 'react';
import Image from 'next/image';
import Chat from '@/assets/images/chatwork.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowWork() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="bg-black relative">
        <div className="py-8 bg-[url('../assets/images/bghowwork.svg')]  px-4 w-full lg:pt-8 lg:pb-16 lg:px-6 z-10 rounded-none">
          <div className="mx-auto max-w-screen-md  text-center mb-8 lg:mb-12 pt-2">
            <div
              data-aos="fade-down"
              className="mb-10  text-xl px-4 lg:px-16 lg:text-3xl tracking-tight font-bold "
            >
              <span className="text-white leading-tight">How We Work</span>
            </div>
            <div
              data-aos="zoom-in"
              className="mx-auto max-w-screen-sm rounded-xl  py-4 bg-[url('../assets/images/bgcardhow.svg')]  px-4 w-full lg:py-8 lg:px-6 z-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Image src={Chat} alt={''} width={200} />
                <div className="text-left">
                  <p className="mt-3 text-xl font-semibold text-white mx-6">
                    Estimate
                  </p>
                  <p className="mb-3 text-xl text-white mx-6">
                    Estimate the cost of creating your application with us.
                    Pricing is transparent at the start with a gradual payment
                    method.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
