const Contact = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        📬 Contact Us
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
        <p className="mb-6 text-gray-300">
          You can reach us via the following methods:
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:@ZTHwallahByDeepuSir.com"
              className="text-red-400 hover:underline"
            >
              @ZTHwallahByDeepuSir
            </a>
          </li>

          <li>
            📱 Phone:{" "}
            <a
              href="tel:+918218190170"
              className="text-red-400 hover:underline"
            >
              +918218190170
            </a>
          </li>

          <li>
            🌐 YouTube Channel:{" "}
            <a
              href="https://www.youtube.com/@ZTHwallahByDeepuSir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              youtube.com/ZTH wallah
            </a>
          </li>
        </ul>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
