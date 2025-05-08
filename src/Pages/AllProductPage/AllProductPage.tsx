/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TProduct, TProductResponse } from "../../types/productManagement.type";

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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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
      page,
      limit,
    },
    { refetchOnMountOrArgChange: true }
  );

  const products: TProduct[]  = data?.data?.data || [];
  const meta = data?.data?.meta;

  const handleNextPage = () => {
    if (meta && page < meta.totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (isFetching)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        {/* <span className="justify-center loading loading-spinner loading-lg "></span> */}
        <img className="w-20 h-20 mx-auto mt-10 pb-10 animate-spin" src="https://www.svgrepo.com/show/474682/loading.svg" alt="Loading icon"/>
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
    <div className="max-w-7xl mx-auto pt-6">
      {/* <TestSearchComponent></TestSearchComponent> */}
      <div className="">
        <h1 className="text-2xl font-bold mb-4 text-black">All Products</h1>
        <div className="max-w-6xl mx-auto pt-4 ">
          {/* Search, Filter, and Sort Options */}
          <div className="flex flex-wrap gap-6   ">
            {/* Filter Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={filterCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 border-black text-black"
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
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1  border-black text-black"
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
            <p className="text-center mt-10 text-[#F2355F] text-lg font-semibold">
              {" "}
              No products found. Try adjusting your search or filters.
            </p>
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
                className="relative mt-2 flex flex-col w-full max-w-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md cursor-pointer"
              >
                <div className="relative mx-3 mt-3  flex h-60 overflow-hidden rounded-xl">
                  <img className="w-full h-full" src={productImg} alt={name} />
                </div>
                <div className="mt-4 px-5 pb-5 flex flex-col justify-between flex-grow">
                  <h5 className="text-lg font-bold tracking-tight text-[#1A1D21] hover:text-[#F2355F]">
                    {name} <span>{model}</span>
                  </h5>

                  <p className="text-[#1A1D21] pt-2 text-sm font-bold line-clamp-2 hover:text-[#F2355F]">
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
      {/* Pagination Controls */}
      {/* Fancy Pagination Controls */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {Array.from({ length: meta?.totalPage || 1 }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  page === pageNumber
                    ? "z-10 bg-black border-black text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          <button
            onClick={handleNextPage}
            disabled={meta && page === meta.totalPage}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AllProductPage;
