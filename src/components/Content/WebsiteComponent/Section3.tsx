import React from 'react';

export default function Section3() {
  return (
    <>
      <section className="w-full bg-[#FFFFFF]">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="h-full flex flex-col items-center relative md:items-start justify-center">
            <h2 className="max-w-2xl text-lg mb-4 md:mb-8 text-center md:text-start font-medium text-[#000000] font-app lg:text-2xl">
              Start Your Own Web Application Now
            </h2>
            <button
              aria-label="Mulai Sekarang"
              id="hubungi-kami-footer"
              className="min-w-[140px] rounded-full bg-[#00AD98] px-4 py-2 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
            >
              Build a Website
            </button>
            <div className="absolute right-0 top-20 md:-top-32">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-32 h-auto md:w-72"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Fbanner%2Fillust.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
