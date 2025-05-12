
import video from "../../../assets/bg-v-1.mp4"
const ProductFeature = () => {
  return (
    <div>
      <section>
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl mt-16 text-black">
          <div>
            <h2 className="text-2xl font-semibold text-center sm:text-5xl">
              What’s New at Bike House
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
              Discover the latest bikes, gear, and services designed to take
              your ride to the next level.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      🚴
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Latest Bike Models</h4>
                    <p className="mt-2">
                      Check out our newest collection of mountain, road, and
                      hybrid bikes equipped with cutting-edge technology.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      ⚙️
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">
                      Professional Bike Servicing
                    </h4>
                    <p className="mt-2">
                      Our expert mechanics offer tune-ups, repairs, and custom
                      upgrades to keep your bike performing at its best.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      🧢
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">
                      New Accessories & Gear
                    </h4>
                    <p className="mt-2">
                      From helmets to hydration packs, shop the latest
                      accessories to stay safe and ride in style.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      🌍
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">
                      Eco-Friendly Commuting Options
                    </h4>
                    <p className="mt-2">
                      Explore electric and hybrid models perfect for sustainable
                      daily commuting and urban travel.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      🛒
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">
                      Easy Financing & Online Ordering
                    </h4>
                    <p className="mt-2">
                      Buy your dream bike today with flexible payment plans and
                      fast online ordering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div  className="mt-10 lg:mt-0  h-[600px] ">
              <video
                className="mx-auto rounded-lg shadow-lg"
                width="700"
                height="600"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src={ video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFeature;
