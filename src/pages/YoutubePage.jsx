import youtubeVideos from "../data/YoutubeVideos";
import { FaYoutube } from "react-icons/fa";

export default function YouTubePage() {
  return (
    <div className="p-8 min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10 flex items-center justify-center">
        <FaYoutube className="mr-3 text-4xl" /> Our YouTube Channel
      </h1>

      <div className="flex justify-center mb-6">
        <a
          href="https://www.youtube.com/@ZTHwallahByDeepuSir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white text-lg transition"
        >
          ▶️ Visit Our YouTube Channel
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {youtubeVideos.map((videoId) => (
          <iframe
            key={videoId}
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
