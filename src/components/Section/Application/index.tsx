import React, { useEffect } from 'react';
import Image from 'next/image';
import Material from '@/assets/images/material.svg';
import Basket from '@/assets/images/basket.svg';
import Book from '@/assets/images/book.svg';
import Market from '@/assets/images/market.svg';
import Build from '@/assets/images/build.svg';
import Cashier from '@/assets/images/cashier.svg';
import Message from '@/assets/images/message.svg';
import Mechanic from '@/assets/images/mechanic.svg';
import Palu from '@/assets/images/palu.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                Applications that can be made
              </span>
            </div>
            {/* first */}
            <div className=" grid  grid-cols-1 lg:grid-cols-3 gap-4">
              <div
                data-aos="fade-left"
                className="w-full h-auto block  p-6 rounded-lg shadow "
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image src={Material} alt={''} width={50} />
                  <h5 className="text-xl font-bold tracking-tight text-white">
                    Online Attendance
                  </h5>
                </div>

                <p className="font-normal text-base text-white text-left">
                  With the times, your team may be able to work in the office or
                  outside the office. Get the accuracy of your team’s work hours
                  with your own company’s special online attendance feature with
                  features such as:
                </p>
                <ul className="ml-4 list-disc text-white text-left">
                  <li>Clock in and Clock Out attendance</li>
                  <li>Face Photo</li>
                  <li>Face Recognition Accurate time stamp down to seconds</li>
                  <li>GPS location of employees</li>
                </ul>
              </div>

              <div
                data-aos="fade-up"
                className="w-full h-auto block  p-6   rounded-lg shadow "
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image src={Basket} alt={''} width={50} />
                  <h5 className="text-xl font-bold tracking-tight text-white">
                    Sport Center
                  </h5>
                </div>

                <p className="font-normal text-base text-white text-left">
                  Create your sports center field booking application. Suitable
                  for futsal, mini soccer, badminton, tennis, golf, basketball,
                  to table tennis. Give your customers the freedom to
                </p>
                <ul className="ml-4 list-disc text-white text-left">
                  <li>Choose a booking schedule </li>
                  <li>Online payments </li>
                  <li>Automatic scheduling system</li>
                  <li>Search for Friends feature </li>
                  <li>Split Payment with team members</li>
                  <li>Information and announcements from you</li>
                </ul>
              </div>

              <div
                data-aos="fade-right"
                className="w-full h-auto block  p-6   rounded-lg shadow "
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image src={Book} alt={''} width={50} />
                  <h5 className="text-xl font-bold tracking-tight text-white">
                    Booking
                  </h5>
                </div>

                <p className="font-normal text-base text-white text-left">
                  Offer your services in your own application to place orders to
                  delivery directly to the client’s house. Suitable for ac
                  service, cleaning, cleaning service, CCTV, massage, and even
                  other digital services. Features that can be made:
                </p>
                <ul className="ml-4 list-disc text-white text-left">
                  <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
                  <li>
                    Melakukan reservasi online dan pembayaran dengan metode
                    pembayaran digital
                  </li>
                  <li>Penjadwalan dengan tim lapangan</li>
                  <li>Aplikasi khusus untuk tim</li>
                  <li>Promosi dan Kode voucher khusus</li>
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-right"
              className="mt-6 grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2"
            >
              <div className="flex items-center text-left lg:justify-center">
                <Image src={Market} alt={''} width={40} />
                <h5 className="text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  E-commerce
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center ">
                <Image src={Build} alt={''} width={40} />
                <h5 className="text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  Company Profile
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center">
                <Image src={Cashier} alt={''} width={40} />
                <h5 className="ml-2 text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  Cashier
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center">
                <Image src={Message} alt={''} width={40} />
                <h5 className="ml-2 text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  Chat
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center">
                <Image src={Mechanic} alt={''} width={40} />
                <h5 className="ml-2 text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  Workshop
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center">
                <Image src={Palu} alt={''} width={40} />
                <h5 className=" ml-2 text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  Contruction
                </h5>
              </div>
              <div className="flex items-center text-left lg:justify-center">
                <h5 className="text-sm md:text-md lg:text-lg font-normal tracking-tight text-white">
                  and many others
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
