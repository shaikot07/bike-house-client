/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderChart } from "../../../Component/Chart/OrderChart";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetOrdersByUserQuery } from "../../../redux/features/order/order";
import { useGetUserOrderChartDataQuery } from "../../../redux/features/user-customer/UserEndManagement.api";
import { useAppSelector } from "../../../redux/hooks";

const CustomerHome = () => {
  const { data, error, isLoading } = useGetOrdersByUserQuery(undefined);

  const orders = data?.data || [];
  console.log(orders);
// fir chart order chart data 
  const user = useAppSelector(selectCurrentUser);
const { data: chartDataResponse } = useGetUserOrderChartDataQuery( user?.email || '');
  const chartData = chartDataResponse?.data || [];
  console.log(chartData , "chartDataResponse chartDataResponse  customer");
  return (
    <div>
      {/* here chart  */}
      {chartData.length > 0 ? (
                <OrderChart rawData={chartData} />
              ) : (
                <p>Loading chart data...</p>
              )}
      <div>
       <div className="mt-14"> <h1 className="text-3xl p-4 text-center text-black">Order History</h1></div>

        <div className="text-gray-900 bg-gray-200 px-3 py-4 flex justify-center">
          {isLoading ? (
            <p className="text-xl">Loading users...</p>
          ) : error ? (
            <p className="text-xl text-red-500">Failed to load users</p>
          ) :orders && orders.length > 0 ? (
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b bg-gray-300 text-black">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">status</th>
                  <th className="text-left p-3 px-5">Total Price</th>
                  <th className="p-3 px-5 text-right">Order History</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: any) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-[#F2355F] bg-gray-100"
                  >
                    {/* <td className="p-3 px-5">{order.name}</td> */}
                    <td className="p-3 px-5">{order?.email}</td>
                    <td className="p-3 px-5">{order?.status}</td>
                    <td className="p-3 px-5">{order?.totalPrice}</td>
                    <td className="p-3 px-5 flex justify-end gap-2">
                      {order?.transaction?.sp_message
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-xl text-gray-600">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
