/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllProductPage = () => {
  //   const [searchTerm, setSearchTerm] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | undefined>(
    undefined
  );
  const [filterInStock, setFilterInStock] = useState<string | undefined>(
    undefined
  );
  const [sortOption, setSortOption] = useState<string | undefined>(undefined);
  //   const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState(20);
  const [finalSearchTerm, setFinalSearchTerm] = useState<string>("");

  const handleFilterChange = (value: any) => {
    if (value === "all") {
      setFilterCategory(undefined);
    } else {
      setFilterCategory(value);
    }
  };
  const handleFilterInStock = (value: any) => setFilterInStock(value);
  const handleSortChange = (value: any) => setSortOption(value);
  const handleSearchClick = () => {
    setFinalSearchTerm(searchTerm);
  };
  const { data, isFetching } = useGetAllProductsQuery(
    {
      search: finalSearchTerm,
      filter: filterCategory,
      inStock: filterInStock,
      sort: sortOption,
      // page,
      // limit,
    },
    { refetchOnMountOrArgChange: true }
  );

  const products = data?.data || [];
  console.log(products);

  if (isFetching)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg"></span>
      </div>
    );

  //   reset all
  const resetFilters = () => {
    setFinalSearchTerm("");
    setFilterCategory(undefined);
    setFilterInStock(undefined);
    setSortOption(undefined);
  };

  return (
    <div className="max-w-6xl mx-auto pt-6">
      {/* <TestSearchComponent></TestSearchComponent> */}
      <div className="">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <div className="max-w-6xl mx-auto pt-4 ">
          {/* Search, Filter, and Sort Options */}
          <div className="flex flex-wrap gap-6   ">
            {/* Filter Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={filterCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
              >
                <option value="all">All Categories</option>
                <option value="Mountain">Mountain</option>
                <option value="Road">Road</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
                <option value="Gravel">Gravel</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
              >
                <option value="asc">sort by price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>

            {/* in-Stock filter buttom */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => handleFilterInStock("inStock")}
                className="w-full sm:w-48 px-4 py-2 text-[#080808] border-1 border-[#080808] rounded-md shadow-sm   focus:outline-none focus:ring-1"
              >
                In Stock
              </button>
            </div>

            {/* search input */}
            <div className="relative w-full sm:w-[420px]">
              <input
                type="search"
                id="search-dropdown"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)} // update searchTer input change
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border-s-gray-50 border-s-2 border border-gray-300"
                placeholder="Search Product by Name, Model, Brand'..."
                required
              />
              <button
                type="button"
                onClick={handleSearchClick} // Debugging: ensure `searchTerm` is correct
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#080808] rounded-sm border border-[#080808] hover:bg-[#F2355F]"
              >
                <FaMagnifyingGlass />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          <button
            onClick={resetFilters}
            className="w-full sm:w-48 mt-1 px-4 py-2 text-[#F2355F] border-1 border-[#080808] rounded-md shadow-sm   focus:ring-1"
          >
            Reset
          </button>
        </div>
        <div></div>
      </div>

      {/* -------------------------------------  */}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.length === 0 ? (
          <div className="max-w-6xl mx-auto mt-8 text-center">
         <p className="text-center mt-10 text-[#F2355F] text-lg font-semibold"> No products found. Try adjusting your search or filters.</p>
        </div>
        ) : (
          products.map(
            ({
              _id,
              productImg,
              name,
              description,
              price,
              model,
              category,
            }) => (
              <div
                key={_id}
                className="relative mt-2 flex flex-col w-full max-w-[280px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
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
                  <Link
                    to={_id}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#F2355F] focus:outline-none focus:ring-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllProductPage;
