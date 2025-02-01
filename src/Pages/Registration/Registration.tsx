
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser, ] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log("Form Data:", data);
    const toastId = toast.loading("Registering...");
    try {
        // call register auth 
      const res = await registerUser(data).unwrap();
      toast.success(`${res.message}`, { id: toastId });
    //   console.log("Registration Response:", res);
      navigate(`/`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
         console.error("Error during login:", );
         toast.error(err.data.message || "Something went wrong", { id: toastId, duration: 2000 });
       }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:w-[500px] lg:h-[600px]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
            <h2 className="mt-6 font-display text-center text-3xl uppercase font-bold text-gray-900">
              Create an account
            </h2>
            <p className="text-center text-sm">
              Enter your information below to proceed..
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof errors.email?.message === "string" && errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof errors.email?.message === "string" && errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof errors.password.message === "string" && errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#F2355F] hover:bg-[#f2355ef1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create an account
              </button>
            </div>
          </form>
          <div className="sm:mx-auto sm:w-full sm:max-w-md mt-2">
            <p className="text-center">
              Already have an account?{" "}
              <span>
                <a
                  href="/login"
                  className="font-medium text-[#F2355F] hover:text-blue-500"
                >
                  Login
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
