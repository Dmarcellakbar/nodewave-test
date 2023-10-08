import Image from 'next/image';
import React from 'react';
import WebCode from '@/assets/images/webcode.svg';
import MobileCode from '@/assets/images/mobilecode.svg';
import Diskon from '@/assets/images/diskon.svg';
import Link from 'next/link';
export const Card1 = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-2 items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
        <div className="w-full">
          <h5 className="mb-2 text-3xl font-bold  text-black ">Website</h5>
          <p className="text-xl font-semibold text-black ">Start from</p>
          <div className="relative">
            <p className="text-sm font-normal text-gray-700 decoration-red-500 line-through">
              Rp. 1.000.000
            </p>
            <div className="absolute top-[-5px] right-[45px]">
              <Image src={Diskon} alt={''} width={20} />
            </div>
          </div>
          <p className="mb-3 text-sm font-normal text-black ">Rp. 500.000</p>

          <Link href={'/website'}>
            <button className="bg-[#00ad98] lg:mt-0 md:mt-0 mt-4 py-2  px-10  text-white text-sm  rounded-full">
              <span className="leading-tight ">Order Now</span>
            </button>
          </Link>
        </div>
        <div className="bg-blue-200 w-full h-full rounded-b-3xl md:rounded-r-3xl">
          <Image
            className="object-cover w-full  h-full   md:rounded-r-xl"
            src={WebCode}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const Card2 = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-2 items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
        <div className="w-full">
          <h5 className="mb-2 text-3xl font-bold  text-black ">Mobile Apps</h5>
          <p className="text-xl font-semibold text-black ">Start from</p>
          <p className="mb-3 text-sm font-normal text-black ">Rp. 999.000</p>

          <Link href={'/mobile-apps'}>
            <button className="bg-[#00ad98] lg:mt-0 md:mt-0 mt-4 py-2  px-10  text-white text-sm  rounded-full">
              <span className="leading-tight ">Order Now</span>
            </button>
          </Link>
        </div>
        <div className="bg-blue-200 w-full h-full rounded-b-3xl md:rounded-r-3xl">
          <Image
            className="object-cover w-full  h-full   md:rounded-r-xl"
            src={MobileCode}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
