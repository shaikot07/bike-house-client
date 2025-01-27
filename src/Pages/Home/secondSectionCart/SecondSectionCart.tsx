import React from "react";
import cImg1 from "../../../assets/c-1.webp";
import cImg2 from "../../../assets/c-2.webp";
import cImg3 from "../../../assets/c-3.webp";
import cImg4 from "../../../assets/c-4.webp";
import cImg5 from "../../../assets/c-5.webp";
const SecondSectionCart = () => {
  return (
    <div className="grid grid-cols-5  max-w-6xl mx-auto gap-10  mt-10 mb-20">
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-10 pt-6 w-[200px] transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
        <img
          src={cImg1}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
        <h3 className="z-10 mt-16 text-2xl font-bold text-white">Mountain</h3>
      </div>
      <div className="relative  isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-10  pt-6 w-[200px] transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
        <img
          src={cImg2}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
        <h3 className="z-10 mt-16 text-2xl font-bold text-white">Gravel</h3>
      </div>
      <div className="relative  isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-10  pt-6 w-[200px] transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
        <img
          src={cImg3}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
        <h3 className="z-10 mt-16 text-2xl font-bold text-white">Road</h3>
      </div>
      <div className="relative  isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-10  pt-6 w-[200px] transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
        <img
          src={cImg4}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
        <h3 className="z-10 mt-16 text-2xl font-bold text-white">Electric</h3>
      </div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-8 pb-10  pt-6 w-[200px] transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
        <img
          src={cImg5}
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
        <h3 className="z-10 mt-16 text-2xl font-bold text-white">Hybrid</h3>
      </div>
    </div>
  );
};

export default SecondSectionCart;
