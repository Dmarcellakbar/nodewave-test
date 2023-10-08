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
            Website Features
          </h2>
          <div className="mb-8 flex flex-col items-center gap-8 md:mb-16">
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fcompany-profile.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Company Profile Website
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Improve the professionalism of your business through a
                    company profile website. Display business services,
                    products, and other related information.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fe-commerce.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    E-Commerce Website
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Sell and buy business products online with an e-commerce
                    website. Manage products, order data, inventory data, and
                    payment transactions within the website.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fproduct-catalog.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Product Catalog
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Manage a list of products, services, or business services
                    complete with brand, type, price, and specifications
                    information in a single website application that is easily
                    accessible online.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fpurchase-payment.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    Purchase and Payment in Website
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Complete your business website with purchase and payment
                    features that are connected to various digital wallets and
                    other payment methods.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fnews-portal.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    News Portal Website
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Display the latest and updated news through a website
                    application that can be accessed online anytime and
                    anywhere.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fonline-form.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    Online Form
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Create surveys, online evaluation observation tables, and
                    document important data systematically through an online
                    website.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fapi-integration.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    API Integration
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Connect your website with external parties through an
                    integrated API connection. Can be for product supply,
                    selling products, third-party service integration, or
                    payment gateway. Our professional team is ready to help you.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fpopup-notification.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-2 md:order-1 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 sm:text-right lg:text-2xl">
                    POP UP Notification
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] sm:text-right lg:text-base">
                    Display a small window that appears with information on
                    various devices such as mobile applications, websites, and
                    others.
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
                      src="https://www.nodewave.id/_next/image?url=%2Fimages%2Fwebsite%2Ffeature%2Fcustom-website.png&w=640&q=75"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h4 className="mb-0 text-lg font-app text-left font-medium text-[#FFFFFF] md:mb-2 lg:text-2xl">
                    Custom Website
                  </h4>
                  <p className="text-sm text-left font-normal text-[#FFFFFF] lg:text-base">
                    Customize the website for your business according to your
                    needs and desires.
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
                        src="https://www.nodewave.id/images/website/feature/real-time-tracking.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Real-Time Tracking
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Track orders, approvals, and appointments in real time
                      with accuracy using real-time tracking.
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
                        src="https://www.nodewave.id/images/website/feature/analysis-report.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Analysis and Reporting
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Visualize business data to help understand business
                      performance and trends and help manage reports.
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
                        src="https://www.nodewave.id/images/website/feature/chatbot.svg"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                    <h4 className="text-sm font-app text-left font-medium text-[#FFFFFF] lg:text-base">
                      Chatbot
                    </h4>
                  </div>
                  <div>
                    <p className="text-xs text-left font-normal text-[#FFFFFF] lg:text-sm">
                      Chat with customers, ask and answer questions, collect
                      answers, provide and collect information, and
                      automatically direct potential customers with chatbots.
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
