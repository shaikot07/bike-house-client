
import { useVerifyOrderQuery } from "../../redux/features/order/order";
import { useSearchParams } from "react-router-dom";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    { refetchOnMountOrArgChange: true }
  );

  const orderData = data?.data?.[0];
  console.log("Order Data:", orderData);

  if (isLoading)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg"></span>
      </div>
    );

  // Extract order status
  // const isSuccess = orderData?.sp_code === "0000"; // Adjust based on actual success code
  const isSuccess = orderData?.sp_message?.toLowerCase().includes("success");
  const message = orderData?.sp_message || "Unknown status";

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
          
          {/* Status Icon */}
          <div
            className={`flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full ${
              isSuccess ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isSuccess ? (
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-12 h-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </div>

          {/* Main Content */}
          <h1
            className={`mb-6 text-4xl font-extrabold ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {isSuccess ? "Payment Successful!" : "Payment Failed!"}
          </h1>

          <p className="mb-8 text-xl text-gray-700">
            {isSuccess
              ? "Thank you for your purchase."
              : "Unfortunately, your payment could not be processed."}
          </p>

          {/* Status Message */}
          <div
            className={`p-6 mb-8 rounded-lg ${
              isSuccess ? "bg-blue-50" : "bg-red-50"
            }`}
          >
            <p
              className={`text-lg font-medium ${
                isSuccess ? "text-blue-700" : "text-red-700"
              }`}
            >
              Order ID: {orderData?.customer_order_id}
            </p>
            <p className="mt-2 text-gray-600">{message}</p>
          </div>

          {/* Button */}
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

