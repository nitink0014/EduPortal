// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4 text-gray-300">
          🎓 We provide high quality NCERT based study notes, YouTube videos,
          and previous year question papers for Class 10 & 12 students. Our
          mission is to help students learn better and score higher marks by
          giving free access to essential study materials.
        </p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ZTH Wallah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
