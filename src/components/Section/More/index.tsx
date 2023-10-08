import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card1, Card2 } from './Card';

export default function Application() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="bg-black relative">
        <div className="py-8  px-4 w-full lg:pt-8 lg:pb-16 lg:px-6 z-10 rounded-none">
          <div className="mx-auto max-w-screen-xl  text-center mb-8 lg:mb-12 pt-2">
            <div
              data-aos="fade-down"
              className="mb-10  text-xl px-4 lg:px-16 lg:text-3xl tracking-tight font-bold "
            >
              <span className="text-white leading-tight">
                Start Creating Websites or Mobile Apps For You Now
              </span>
            </div>
            {/* first */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div data-aos="fade-right">
                <Card1 />
              </div>
              <div data-aos="fade-left">
                <Card2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
