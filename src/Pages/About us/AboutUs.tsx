import React from "react";
import vieo from '../../assets/bic.mp4'

const AboutUs = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                We are the platform with the largest supply of new and used
                cycles and the world's premier destination for authentic <br />
                super-bikes from WorldTour teams and limited editions from top
                brands. Our goal is to provide access to the world's most
                dreamed of bikes, in the easiest way possible. Your next bike,
                one click away.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <video
                src={vieo}
                autoPlay
                loop
                muted
                className="object-cover rounded-lg shadow-md"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
