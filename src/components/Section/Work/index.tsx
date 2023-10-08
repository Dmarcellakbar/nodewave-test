import React, { useEffect } from 'react';
import Image from 'next/image';
import { CardList } from './CardList';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Work() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="bg-black relative">
        <div className="py-8   px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 pt-10">
            <div
              data-aos="fade-down"
              className="mb-4 text-xl px-4 lg:px-16 lg:text-3xl tracking-tight font-extrabold text-gray-900 "
            >
              <span className="text-white leading-tight">Our Works</span>
            </div>
          </div>
          <div data-aos="fade-right">
            <CardList />
          </div>
        </div>
      </section>
    </div>
  );
}
