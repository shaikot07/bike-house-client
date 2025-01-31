import React from "react";
import { useVerifyOrderQuery } from "../../redux/features/order/order";
import { useSearchParams } from "react-router-dom";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData = data?.data?.[0];
  console.log("very", orderData);
  if (isLoading) return <div className="max-w-6xl mx-auto mt-8 text-center"><span className="justify-center loading loading-spinner loading-lg"></span></div>;;
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
          {/* <!-- Success Icon --> */}
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          {/* <!-- Main Content --> */}
          <h1 className="mb-6 text-4xl font-extrabold text-green-600">
            Payment Successful!
          </h1>

          <p className="mb-8 text-xl text-gray-700">
            Thank you for your purchase.
          </p>

          <div className="p-6 mb-8 rounded-lg bg-blue-50">
            <p className="text-lg font-medium text-blue-700">
            Order Id: {orderData?.customer_order_id}
            </p>
          </div>
          {/* 
        <!-- Contact Information --> */}
          

          <div className="mt-12">
            <a
              href="/dashboard"
              className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-[#F2355F] hover:bg-black rounded-md"
            >
              Return to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOrder;
