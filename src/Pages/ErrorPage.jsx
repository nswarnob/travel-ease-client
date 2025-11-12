import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
        <br />
        {error?.statusText || error?.message ? (
          <span className="block mt-2 text-sm text-red-500">
            {error.statusText || error.message}
          </span>
        ) : null}
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
