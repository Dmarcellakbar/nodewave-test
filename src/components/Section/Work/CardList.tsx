import React from 'react';
import Image from 'next/image';
import ImgCard1 from '@/assets/images/imgcard1.svg';
import ImgCard2 from '@/assets/images/imgcard2.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ListTesti = ({ deskripsi, nama, img }: any) => {
  return (
    <>
      <div className="flex gap-2">
        <Image src={img} alt={''} width={300} className="rounded-2xl" />
        <div>
          <p className="mt-3 text-3xl  text-white ">{nama}</p>
          <p className="mb-3 text-xl text-white ">{deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export const CardList = () => {
  return (
    <>
      <div>
        <div className="flex pb-10 scroll-bar">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard1.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard1}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Rayu Motor'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard2.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard2}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Jasabung'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard1.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard1}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Rayu Motor'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard2.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard2}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Jasabung'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard1.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard1}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Rayu Motor'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <div className="w-[873px] h-[320px]  max-w-xl overflow-hidden rounded-lg shadow-md  bg-[url('../assets/images/bgcard2.svg')]  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="w-full h-full flex items-center py-4 px-3 backdrop-blur-sm">
                    <ListTesti
                      img={ImgCard2}
                      deskripsi={
                        'AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales'
                      }
                      nama={'Jasabung'}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
