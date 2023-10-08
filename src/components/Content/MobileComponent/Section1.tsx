import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="w-full bg-[#000000] pt-[56px] lg:pt-[80px]">
        <div
          style={{
            backgroundImage: 'url("/images/website/hero/background.png")',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
          }}
        >
          <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
            <div className="mb-4 md:mb-8">
              <h1 className="mb-2 text-2xl font-medium text-[#FFFFFF] font-app text-center md:mb-4 lg:text-4xl">
                Professional Website Creation Services
              </h1>
              <p className="text-sm font-normal text-[#FFFFFF] text-center lg:text-base">
                Create your company profile website, e-commerce transaction
                website, payment acceptance platform, job vacancy portal, or
                client chatbot. With affordable and transparent pricing. Consult
                all your website needs with Nodewave.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 min-h-full aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="h-full pt-0 lg:pt-8">
                  <div className="pb-4 pt-8 md:pb-6 md:pt-12 rounded-xl bg-[#FFFFFF] shadow px-4 h-full">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center">
                        <div className="mb-4">
                          <h4 className="text-base text-center font-app font-medium text-[#000000] lg:text-lg">
                            Website Company Profile
                          </h4>
                        </div>
                        <p className="text-xs text-right font-normal text-[#CACACA] lg:text-sm">
                          Start From
                        </p>
                        <h4 className="mb-8 text-lg whitespace-nowrap font-app text-right font-medium text-[#00AD98] lg:text-2xl">
                          IDR 500.000
                        </h4>
                        <div className="mb-8 w-full space-y-2">
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              3 Pages
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Completion in 3 days
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Custom Content Optional
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Free to Choose Company Profile Features
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <button
                          aria-label="Pesan Sekarang"
                          id="pesan-sekarang-catalog"
                          className="min-w-[140px] w-full rounded bg-[#00AD98] px-4 py-2 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 min-h-full aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="h-full ">
                  <div className="pb-4 pt-8 md:pb-6 md:pt-12 rounded-xl bg-[#FFFFFF] shadow px-4 h-full">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center">
                        <div className="mb-4">
                          <h4 className="text-base text-center font-app font-medium text-[#000000] lg:text-lg">
                            Online Store Website
                          </h4>
                        </div>
                        <p className="text-xs text-right font-normal text-[#CACACA] lg:text-sm">
                          Start From
                        </p>
                        <h4 className="mb-8 text-lg whitespace-nowrap font-app text-right font-medium text-[#00AD98] lg:text-2xl">
                          IDR 4.000.000
                        </h4>
                        <div className="mb-8 w-full space-y-2">
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              5 Pages
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Connect Payment Gateway
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Unlimited Product Listings
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Feature Integration
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Free to Customize Content
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <button
                          aria-label="Pesan Sekarang"
                          id="pesan-sekarang-catalog"
                          className="min-w-[140px] w-full rounded bg-[#00AD98] px-4 py-2 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 min-h-full aos-init"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="h-full pt-0 lg:pt-8">
                  <div className="pb-4 pt-8 md:pb-6 md:pt-12 rounded-xl bg-[#FFFFFF] shadow px-4 h-full">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center">
                        <div className="mb-4">
                          <h4 className="text-base text-center font-app font-medium text-[#000000] lg:text-lg">
                            Website Custom
                          </h4>
                        </div>
                        <p className="text-xs text-right font-normal text-[#CACACA] lg:text-sm">
                          Start From
                        </p>
                        <h4 className="mb-8 text-lg whitespace-nowrap font-app text-right font-medium text-[#00AD98] lg:text-2xl">
                          IDR 5.000.000
                        </h4>
                        <div className="mb-8 w-full space-y-2">
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              10 pages
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Connect Payment Gateway
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Unlimited Product Listings
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Feature Integration
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-normal text-[#000000] lg:text-base">
                              Free Custom Contents
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <button
                          aria-label="Pesan Sekarang"
                          id="pesan-sekarang-catalog"
                          className="min-w-[140px] w-full rounded bg-[#00AD98] px-4 py-2 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0 shadow"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
