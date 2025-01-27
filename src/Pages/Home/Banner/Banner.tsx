import React from "react";
import bgV1 from "../../../assets/bg-v-1.mp4";
const Banner = () => {
  return (
    <div className="">
  <section className="relative h-[490px]">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={bgV1} // Replace with the URL of your video file
      autoPlay
      muted
      loop
    ></video>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

    {/* Content Section */}
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[450px] lg:items-center lg:px-8">
      <div className="max-w-3xl text-center sm:text-left lg:ml-[35px] sm:text-left rtl:sm:text-right">
        <h1 className="text-base font-extrabold text-white sm:text-5xl">
          Ride the Revolution Your biking destination.
          <strong className="block font-extrabold text-white "> </strong>
        </h1>

        <p className="mt-4 max-w-lg text-white text-base">
          Discover the ultimate collection of bikes, gear, and accessories.
          Whether you're a casual rider or an avid enthusiast, we’ve got
          everything you need to hit the road in style and comfort.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-center sm:text-left justify-center sm:justify-start">
          <a
            href="#"
            className="block w-full rounded bg-[#f2355f] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Explore the collection
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Banner;
