

const ServicesSection = () => {
  const services = [
    {
      title: "Services",
      image: "https://bike-room.com/cdn/shop/files/0e53a879ae266e41b73e04ebf4196d7d_375x_crop_center.jpg?v=1703250677", 
    },
    {
      title: "Shipping",
      image: "https://bike-room.com/cdn/shop/files/still_ship_car1_375x_crop_center.jpg?v=1710861109", 
    },
    {
      title: "Work with us",
      image: "https://bike-room.com/cdn/shop/files/0e53a879ae266e41b73e04ebf4196d7d_375x_crop_center.jpg?v=1703250677", 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto  mt-14 mb-10 py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md">
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent  flex items-center justify-center">
              <h2 className="text-white text-lg md:text-3xl font-bold">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
