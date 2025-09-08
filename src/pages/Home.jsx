import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 
                 bg-[url('./books-8934573.jpg')] bg-cover bg-center"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          📘 Welcome to <span className="text-red-500">ZTH Wallah</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
          Free Notes, YouTube Lectures & Previous Year Question Papers for
          <span className="font-semibold text-yellow-300">
            {" "}
            Class 10 & 12 Students
          </span>{" "}
          based on NCERT.
        </p>

        <div className="flex gap-6 justify-center">
          <Link
            to="/class/10"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-xl 
                       hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            Explore Class 10
          </Link>
          <Link
            to="/class/12"
            className="px-6 py-3 bg-green-400 text-black font-semibold rounded-xl shadow-xl 
                       hover:bg-green-500 hover:scale-105 transition-transform duration-300"
          >
            Explore Class 12
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
