
import { Link } from "react-router-dom";
import cImg1 from "../../../assets/c-1.webp";
import cImg2 from "../../../assets/c-2.webp";
import cImg3 from "../../../assets/c-3.webp";
import cImg4 from "../../../assets/c-4.webp";
import cImg5 from "../../../assets/c-5.webp";
const SecondSectionCart = () => {
  return (
     <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto gap-6 mt-10 mb-10">
        {/* Card 1 */}
        <Link to="/products" className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={cImg1}
            alt="Mountain"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-16 text-2xl font-bold text-white">Mountain</h3>
        </Link>

        {/* Card 2 */}
        <Link to="/products" className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={cImg2}
            alt="Gravel"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-16 text-2xl font-bold text-white">Gravel</h3>
        </Link>

        {/* Card 3 */}
        <Link to="/products" className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={cImg3}
            alt="Road"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-16 text-2xl font-bold text-white">Road</h3>
        </Link>

        {/* Card 4 */}
        <Link to="/products" className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={cImg4}
            alt="Electric"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-16 text-2xl font-bold text-white">Electric</h3>
        </Link>

        {/* Card 5 */}
        <Link to="/products" className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-6 pb-2 pt-6 transition-transform duration-300 hover:-translate-y-2 hover:cursor-pointer">
          <img
            src={cImg5}
            alt="Hybrid"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0"></div>
          <h3 className="z-10 mt-16 text-2xl font-bold text-white">Hybrid</h3>
        </Link>
      </div>
    </div>
  );
};

export default SecondSectionCart;
