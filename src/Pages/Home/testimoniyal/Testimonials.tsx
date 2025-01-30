import { useEffect, useState } from "react";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <div className="mb-10 mt-5">
      <div className="max-w-6xl mx-auto ">
        <section className=" ">
          <h2 className=" font-bold text-[#1A1D21] text-3xl text-center">
            Testimonials
          </h2>
          <Swiper
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay settings
            modules={[Autoplay]}
            className="text-justify"
            style={
              {
                // '--swiper-navigation-color': '#350C38',
                // '--swiper-navigation-size': '25px', // Adjust icon size
              }
            }
          >
            <SwiperSlide
            // key={review._id}
            >
              <div className="flex flex-col items-center mx-4 lg:mx-24 my-6">
                {/* reating here  */}
                <p className="py-8   text-[#1A1D21] text-justify font-bold text-base lg:text-2xl">
                “ Want to ride an actual pro bike? Bikeroom has you covered. Each one is inspected by a team under the supervision of a World Tour mechanic. ”
                </p>
                <h3 className="text-1xl text-[#1A1D21] ">- crestfer</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide
            // key={review._id}
            >
              <div className="flex flex-col items-center mx-4 lg:mx-24 my-6">
                {/* reating here  */}
                <p className="py-8   text-[#1A1D21] text-justify font-bold text-base lg:text-2xl">
                “ Want to ride an actual pro bike? Bikeroom has you covered. Each one is inspected by a team under the supervision of a World Tour mechanic. ”
                </p>
                <h3 className="text-1xl text-[#1A1D21] ">- crestfer</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide
            // key={review._id}
            >
              <div className="flex flex-col  items-center mx-4 lg:mx-24 my-6">
                {/* reating here  */}
                <p className="py-8   text-[#1A1D21] text-justify font-bold text-base lg:text-2xl">
                “ Want to ride an actual pro bike? Bikeroom has you covered. Each one is inspected by a team under the supervision of a World Tour mechanic. ”
                </p>
                <h3 className="text-1xl text-[#1A1D21] ">- crestfer</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
