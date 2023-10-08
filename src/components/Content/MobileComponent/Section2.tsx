import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="w-full bg-[#000000]">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <h2 className="text-2xl mb-4 md:mb-8 font-medium text-[#FFFFFF] font-app text-center lg:text-4xl">
            Mobile App Features
          </h2>
          <div className="mb-8 flex flex-col items-center gap-8 md:mb-16">
            <div
              className="w-full max-w-4xl aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fonline-store.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Online Store App
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    An online store app that allows you to browse product
                    collections easily and anytime, payment options with various
                    practical and secure payment methods, and ease in the
                    process of ordering and shipping products.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 order-1 sm:order-2 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fpos-system.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    POS System
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Integrate sales, inventory, and customer management in your
                    business with a POS system. Faster transaction processing,
                    accurate inventory tracking, and analysis of business sales
                    trends in just one app.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Freport-app.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Reporting App
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Manage your business reports and data easily and practically
                    using a reporting app that you can monitor in real-time and
                    data analysis features to help you manage your business.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 order-1 sm:order-2 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Freal-time-attendance.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    Real-Time Attendance
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Manage employee attendance with accurate real-time selfie
                    photos, manage permissions and leaves as well as shift
                    scheduling in the same application.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fpayment-integration.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Payment Method Integration
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Integrate your business with various online payment
                    platforms such as m-banking, Gopay, OVO, and other payment
                    methods to make payment processing easier.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 order-1 sm:order-2 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fgps-mapping.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    GPS and Mapping
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    The GPS and mapping features in mobile apps bring ease and
                    efficiency to everyday navigation. The mapping feature
                    allows you to adjust the route based on traffic conditions,
                    as well as mark and save favorite locations for quick
                    access.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fwhatsapp-bot.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    WhatsApp Bot
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    WhatsApp Business API feature with an artificial
                    intelligence (AI) program that automatically responds to
                    every WhatsApp message.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-w-4xl aos-init"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 order-1 sm:order-2 sm:col-span-5">
                  <div>
                    <img
                      alt=""
                      width={480}
                      height={480}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-32 object-cover md:h-48"
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fmobile-apps%2Ffeature%2Fcustom-app.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    Custom App
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Customize mobile apps for Android and iOS with the latest
                    features that can be customized to your needs and desires.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 aos-init"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="rounded-xl min-h-full">
                <div>
                  <div className="mb-4 flex items-center">
                    <div className="mr-4">
                      <img
                        alt=""
                        width={480}
                        height={480}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-auto md:w-12"
                        src="https://www.nodewave.id/images/mobile-apps/feature/car-rental.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Car Rental App
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Manage your car rental business with a mobile app for unit
                      booking, select dates and locations for pick-up and
                      return. Complete with GPS features to track the position
                      of the car in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 aos-init"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="rounded-xl min-h-full">
                <div>
                  <div className="mb-4 flex items-center">
                    <div className="mr-4">
                      <img
                        alt=""
                        width={480}
                        height={480}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-auto md:w-12"
                        src="https://www.nodewave.id/images/mobile-apps/feature/education-app.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Education App
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Manage the education process with the latest features
                      ranging from online PPDB features to online learning or
                      e-learning systems with a simple mobile app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 aos-init"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="rounded-xl min-h-full">
                <div>
                  <div className="mb-4 flex items-center">
                    <div className="mr-4">
                      <img
                        alt=""
                        width={480}
                        height={480}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-auto md:w-12"
                        src="https://www.nodewave.id/images/mobile-apps/feature/health-app.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Health App
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Get product sales, patient queue, and consultation
                      schedule management features with a doctor in one
                      easy-to-use mobile app.
                    </p>
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
