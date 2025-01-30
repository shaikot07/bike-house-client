import React from "react";
import b1 from "../../../assets/b-1.webp";
import b2 from "../../../assets/b-2.webp";
import b3 from "../../../assets/b-3.webp";
import b4 from "../../../assets/b-4.webp";
import b5 from "../../../assets/b-5.webp";
import b6 from "../../../assets/b-6.webp";

const TopBrand = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-10 mb-8">
      <h2 className="text-3xl pt-5 font-extrabold pb-8">Top Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {/* Card 1 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b1}
            alt="ChargeUp"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">
            ChargeUp
          </h3>
        </div>

        {/* Card 2 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b2}
            alt="Rugged Path"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">
            Rugged Path
          </h3>
        </div>

        {/* Card 3 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b3}
            alt="Off RoadX"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">
            Off RoadX
          </h3>
        </div>

        {/* Card 4 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b4}
            alt="Turbo Wheels"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">
            Turbo Wheels
          </h3>
        </div>

        {/* Card 5 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b5}
            alt="UrbanX"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">UrbanX</h3>
        </div>

        {/* Card 6 */}
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={b6}
            alt="Alpine Rides"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-20 text-base font-bold text-white">
            Alpine Rides
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopBrand;
