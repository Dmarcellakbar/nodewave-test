import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ListTesti = ({ deskripsi, nama }: any) => {
  return (
    <>
      <div className="relative w-[442px] h-[144px] py-4 px-3 max-w-xl overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-transform transform duration-300 ease-in-out">
        <p className="mb-3 text-sm text-black ">{deskripsi}</p>
        <p className="absolute bottom-2 mt-3 text-sm text-blue-600 ">{nama}</p>
      </div>
    </>
  );
};

export const CardScroll = () => {
  return (
    <>
      <div>
        <div className="pb-10 hidden md:hidden lg:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={150}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pb-10 block md:hidden lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={150}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="pb-10 hidden md:block lg:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={250}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.'
                  }
                  nama={'Ahmad Prasetyo'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
                  }
                  nama={'Laras Ratnadewi'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block px-3">
                <ListTesti
                  deskripsi={
                    'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
                  }
                  nama={'Yusuf Uwais'}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
