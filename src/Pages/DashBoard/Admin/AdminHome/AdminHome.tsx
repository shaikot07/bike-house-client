/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrderChart } from "../../../../Component/Chart/OrderChart";
import {
  useGetOrderChartDataQuery,
  useGetRevenueDataQuery,
} from "../../../../redux/features/admin/order/orderManagement.api";
import { useGetAllProductsQuery } from "../../../../redux/features/admin/productManagement.api";
import { useGetAllUsersQuery } from "../../../../redux/features/admin/userManagement.api";
import { TProduct } from "../../../../types/productManagement.type";

const AdminHome = () => {
  const { data } = useGetRevenueDataQuery(undefined);
  const revenue = data?.data || [];
  console.log(revenue);
  const { data: chartDataResponse } = useGetOrderChartDataQuery(undefined);
  const chartData = chartDataResponse?.data?.totalRevenue || [];
  // console.log(chartDataResponse ,"chart data");
  // for product
  const { data: productsData, isLoading } = useGetAllProductsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  // const products = productsData?.data || [];
  const products = productsData || { data: [] };
  console.log(products);
  // for user
  const { data: usersData } = useGetAllUsersQuery(undefined);
  const users = usersData?.data || [];
  console.log(users);

  if (isLoading) {
    console.log("Loading...");
  }
  return (
    <div>
      <div className="bg-white rounded-2xl mb-10 shadow-md px-12 py-6 flex justify-between items-center gap-16">
        {/* <!-- All Properties --> */}
        <div className="text-center">
          <p className="text-xs text-gray-500">All Users</p>
          <p className="text-2xl font-semibold">{users?.length} +</p>
        </div>

        {/* <!-- Divider --> */}
        <div className="w-px h-12 bg-gray-200"></div>

        {/* <!-- Total Revenue --> */}
        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Total Revenue</p>
            <p className="text-xl font-semibold">$ {revenue?.totalRevenue}</p>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="w-px h-12 bg-gray-200"></div>

        {/* <!-- Total product --> */}
        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.5C7.305 4.5 3.21 7.6 1.5 12c1.71 4.4 5.805 7.5 10.5 7.5s8.79-3.1 10.5-7.5C20.79 7.6 16.695 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Total Product</p>
            {/* <p className="text-xl font-semibold">{products?.data?.length || 0}</p> */}
            <p className="text-xl font-semibold">
              {(products as { data: TProduct[] }).data.length}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto mt-14 rounded-2xl ">
        {chartData.length > 0 ? (
          <OrderChart rawData={chartData} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
