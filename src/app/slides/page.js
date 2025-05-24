
export default function Slides() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-gray-800">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Slides Product – Coming Soon 🚀
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          We’re working hard to launch our Slides product. Stay tuned!
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-800 w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-white  border border-gray-600 bg-blue-100 text-indigo-600 px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Notify Me
          </button>
        </form>
        <p className="text-sm mt-6 opacity-75">© {new Date().getFullYear()} unified binary system Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}
