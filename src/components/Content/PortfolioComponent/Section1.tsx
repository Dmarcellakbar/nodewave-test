import React from 'react';

export default function Section1() {
  return (
    <>
      <section className="w-full bg-[#000000] pt-[56px] lg:pt-[80px]">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="mb-4 md:mb-8">
            <h1 className="mb-2 text-2xl font-medium text-[#FFFFFF] font-app text-center md:mb-4 lg:text-4xl">
              Our Portfolio
            </h1>
            <p className="text-sm font-normal text-[#FFFFFF] text-center lg:text-base">
              These are some of our featured portfolios
            </p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-8 md:mb-16">
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-1.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-2.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-3.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-4.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-5.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="w-full max-w-4xl">
              <img
                alt=""
                width={480}
                height={480}
                decoding="async"
                data-nimg={1}
                className="w-full h-40 object-contain md:h-80"
                src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fportfolio%2Fproduct%2Fportfolio-6.png&w=640&q=75"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
