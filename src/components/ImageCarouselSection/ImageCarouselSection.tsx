'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarouselSection = () => {
  return (
    <section className="bg-[#E8F1FF] py-12">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3D7C] mb-6 flex items-center">
          <span className="mr-2 border-b-4 border-red-500 w-8"></span> Why Pragati?
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          className="rounded-lg shadow-lg"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/720x480"
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full font-semibold text-sm">
                IB PYP Candidate School
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/720x480"
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Fostering Learning
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://via.placeholder.com/720x480"
                alt="Slide 3"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Transforming Minds
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarouselSection;
