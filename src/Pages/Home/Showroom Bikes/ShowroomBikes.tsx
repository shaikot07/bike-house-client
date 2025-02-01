
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/admin/productManagement.api";

const ShowroomBikes = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useGetAllProductsQuery({});
  const products = data?.data?.slice(6, 10) || [];

  const handleClick = () => {
    navigate("/product");
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-6">
      <h1 className="text-3xl pt-6 font-extrabold ">Showroom Bikes</h1>
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {products.map(
          ({ _id, productImg, name, description, price, model, category }) => (
            <div
              key={_id}
              onClick={handleClick}
              className="relative mt-2 cursor-pointer flex flex-col w-full max-w-[280px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              {/* "New" Badge */}
              {/* <span className="absolute z-10 top-2 right-2 bg-[#F2355F] text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                New
              </span> */}

              <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full h-full"
                  src={productImg}
                  alt={name}
                />
              </div>
              <div className="mt-4 px-5 pb-5 flex flex-col justify-between flex-grow">
                <a href="#">
                  <h5 className="text-lg font-bold tracking-tight text-[#1A1D21]">
                    {name} <span>{model}</span>
                  </h5>
                </a>
                <p className="text-[#1A1D21] pt-2 text-sm font-bold line-clamp-2">
                  {description}
                </p>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-2xl font-bold text-[#1A1D21]">
                      ${price}
                    </span>
                  </p>
                  <p className="text-base font-bold">{category}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ShowroomBikes;
