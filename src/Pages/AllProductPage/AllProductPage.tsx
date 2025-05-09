/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TProduct,  } from "../../types/productManagement.type";

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
  const limit = 10; // Convert to a constant since it's not being modified
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
  const { data: apiResponse, isFetching } = useGetAllProductsQuery(
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

  const products: TProduct[] = apiResponse?.data?.data || [];
  const meta = apiResponse?.data?.meta;
  console.log(products, "products from all ");

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
        <img
          className="w-20 h-20 mx-auto mt-10 pb-10 animate-spin"
          src="https://www.svgrepo.com/show/474682/loading.svg"
          alt="Loading icon"
        />
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
  
    // -------------new layout code --? 
    <div className="max-w-7xl mx-auto pt-6">
  <h1 className="text-2xl font-bold mb-4 text-black">All Products</h1>

  <div className="flex flex-col lg:flex-row gap-6">
    {/* ====== Left Sidebar: Filter/Search/Sort ====== */}
    <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow border h-[500px] overflow-y-auto">
      <div className="space-y-8">
        {/* Search Input */}
        <div className="relative">
          <input
            type="search"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300"
            placeholder="Search Product..."
          />
          <button
            type="button"
            onClick={handleSearchClick}
            className="absolute top-0 right-0 p-2.5 h-full text-white bg-[#080808] rounded-r-md hover:bg-[#F2355F]"
          >
            <FaMagnifyingGlass />
          </button>
        </div>

        {/* Filter by Category */}
        <select
          value={filterCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none border-black text-black"
        >
          <option value="all">All Categories</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
          <option value="Gravel">Gravel</option>
        </select>

        {/* Sort Options */}
        <select
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none border-black text-black"
        >
          <option value="asc">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        {/* In Stock Filter */}
        <button
          onClick={() => handleFilterInStock("inStock")}
          className="w-full px-4 py-2 text-[#080808] border border-[#080808] rounded-md"
        >
          In Stock
        </button>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full px-4 py-2 text-[#F2355F] border border-[#080808] rounded-md"
        >
          Reset
        </button>
      </div>
    </div>

    {/* ====== Right Content: Product Cards (Cart) ====== */}
    <div className="w-full lg:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center mt-10">
            <p className="text-[#F2355F] text-lg font-semibold">
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
                className="relative flex flex-col w-full max-w-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md cursor-pointer"
              >
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
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
                    to={`/products/${_id}`}
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
  </div>
</div>
  );
};

export default AllProductPage;
