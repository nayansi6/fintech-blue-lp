import React from "react";

const SignIn = () => {
  return (
   <div className="">
     <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Sign in to <span className="text-blue-600">UBS Mail</span>
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Your privacy-first email workspace
        </p>

        <form className="mt-8 space-y-6">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div></div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default SignIn;
