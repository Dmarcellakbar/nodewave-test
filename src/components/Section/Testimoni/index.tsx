import React, { useEffect } from 'react';
import { CardScroll } from './CardScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimoni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="#section4">
      <section className="bg-black relative">
        <div className="relative py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div
            data-aos="fade-down"
            className="text-2xl pt-10 pb-4 lg:text-4xl font-extrabold text-left"
          >
            <span className="text-white leading-tight">Testimoni</span>
          </div>
          <div data-aos="fade-right">
            <CardScroll />
          </div>
        </div>
      </section>
    </div>
  );
}
