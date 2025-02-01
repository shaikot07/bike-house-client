
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="font-extrabold text-5xl text-red-700">
        Well, this is embarrassing. <br />
        Where did the page go?!
      </h1>
      <p className="mt-10">
        This is not the page you're looking for. [wave hand]
      </p>
      <Link
      to='/product'
       className="mt-5 px-6 py-3 bg-black text-white rounded-lg">
        Continue shopping
      </Link>
    </div>
  );
};

export default ErrorPage;
