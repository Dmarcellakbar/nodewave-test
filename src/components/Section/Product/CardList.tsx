import React, { useState } from 'react';
import Image from 'next/image';
import MobileImg from '@/assets/images/mobileimg.svg';
import WebsiteImg from '@/assets/images/webimg.svg';

export default function CardList({
  handleToggle,
  showObject1,
  showObject2,
}: any) {
  return (
    <>
      <ul className="grid w-full gap-4 md:grid-cols-1">
        <li>
          <input
            type="radio"
            id="1"
            name="hosting"
            value="1"
            className="hidden peer"
            required
            checked={showObject1}
            onChange={() => handleToggle(1)}
          />
          <label
            htmlFor="1"
            className="inline-flex gap-4 items-center scale-90 justify-between w-full py-2 px-4 text-white bg-black border border-gray-200 rounded-lg cursor-pointer  peer-checked:py-4 peer-checked:border-blue-600 peer-checked:text-black  peer-checked:bg-white peer-checked:scale-100 hover:text-black hover:scale-100 hover:bg-white hover:border-blue-600 hover:py-4"
          >
            <Image src={MobileImg} alt={'img'} width={60} />
            <div className="flex flex-col justify-between  leading-normal">
              <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight  ">
                Mobile Apps
              </h5>
              <p className="mb-3   text-sm lg:text-base ">
                Buat aplikasi mobile sesuai dengan fitur yang anda pilih
              </p>
            </div>
            <div className="w-10 lg:w-20 lg:h-20 flex items-end ">
              <svg
                className=" ml-2 text-[#FFB347]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="2"
            name="hosting"
            value="2"
            className="hidden peer"
            checked={showObject2}
            onChange={() => handleToggle(2)}
          />
          <label
            htmlFor="2"
            className="inline-flex gap-4 items-center scale-90 justify-between w-full py-2 px-4 text-white bg-black border border-gray-200 rounded-lg cursor-pointer  peer-checked:py-4 peer-checked:border-blue-600 peer-checked:text-black  peer-checked:bg-white peer-checked:scale-100 hover:text-black hover:scale-100 hover:bg-white hover:border-blue-600 hover:py-4"
          >
            <Image src={WebsiteImg} alt={'img'} width={60} />
            <div className="flex flex-col justify-between  leading-normal">
              <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight  ">
                Website
              </h5>
              <p className="mb-3  text-sm lg:text-base  ">
                Buat website sesuai dengan fitur modern yang mumpuni.
              </p>
            </div>
            <div className="w-10 lg:w-20 lg:h-20 flex items-end ">
              <svg
                className=" ml-2 text-[#FFB347]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </label>
        </li>
      </ul>
    </>
  );
}
