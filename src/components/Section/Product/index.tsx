import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CardFullMobile, CardFullWebsite } from './Card';
import CardList from './CardList';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Product() {
  const [showObject1, setShowObject1] = useState(true);
  const [showObject2, setShowObject2] = useState(false);

  const handleToggle = (objectNumber: any) => {
    if (objectNumber === 1) {
      setShowObject1(!showObject1);
      setShowObject2(false);
    } else if (objectNumber === 2) {
      setShowObject1(false);
      setShowObject2(!showObject2);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="bg-black relative">
        <div className="py-8  px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 pt-10">
            <div
              data-aos="fade-down"
              className="mb-4 text-xl px-4 lg:px-16 lg:text-3xl tracking-tight font-extrabold text-gray-900 "
            >
              <span className="text-white leading-tight">Our Product</span>
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg justify-center  gap-4 relative grid grid-cols-1 lg:grid-cols-3 space-y-0 ">
            {/* <div className=" grid  grid-cols-2 lg:grid-cols-1 gap-4">
              <CardMobile />
              <CardWebsite />
            </div> */}
            <div data-aos="fade-right">
              <CardList
                showObject1={showObject1}
                showObject2={showObject2}
                handleToggle={handleToggle}
              />
            </div>
            <div data-aos="fade-right" className="col-span-2 w-full ">
              {showObject1 && <CardFullMobile />}
              {showObject2 && <CardFullWebsite />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
