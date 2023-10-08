import Image from 'next/image';
import React, { useState } from 'react';
import MobileImg from '@/assets/images/mobileimg.svg';
import WebsiteImg from '@/assets/images/webimg.svg';
import FrameMobile from '@/assets/images/framemobile.svg';
import Link from 'next/link';

export const CardFullMobile = () => {
  return (
    <>
      <div className="w-full h-full text-center  p-6 bg-white border border-gray-200 rounded-xl shadow ">
        <div className="justify-center flex">
          <Image src={FrameMobile} alt={'mobile'} width={150} />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Mobile Apps
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 ">
          Buat Mobile Apps Android dan iOS sekaligus dengan fitur pilihan anda.
          Digitalisasi proses bisnis anda dengan aplikasi pemesanan, transaksi
          jual beli, absensi karyawan, kasir, informasi, maupun aplikasi chat
          dengan fitur GPS.
        </p>
        <Link
          href="/mobile-apps"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ad98] rounded-lg hover:bg-[#087064] focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Pelajari Selengkapnya
        </Link>
      </div>
    </>
  );
};

export const CardFullWebsite = () => {
  return (
    <>
      <div className="w-full h-full text-center  p-6 bg-white border border-gray-200 rounded-xl shadow ">
        <div className="justify-center flex">
          <Image src={FrameMobile} alt={'mobile'} width={150} />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Website
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 ">
          Buat company profile, website transaksi jual beli, terima pembayaran,
          portal member, lowongan kerja, atau chatbot dengan klien. Desain
          disesuaikan dengan kebutuhan proses bisnis anda sekarang.
        </p>
        <Link
          href="/website"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ad98] rounded-lg hover:bg-[#087064] focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Pelajari Selengkapnya
        </Link>
      </div>
    </>
  );
};
