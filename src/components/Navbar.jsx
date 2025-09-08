import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./ZTH.jpg" // <-- your logo image here (public folder)
            alt="ZTH Wallah Logo"
            className="h-10 w-10 object-contain rounded-full"
          />

          {/* Logo Text */}
          <span className="text-xl font-bold">
            <span className="text-white">ZTH</span>
            <span className="text-red-500">Wallah</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/class/10" className="hover:text-blue-400">
            Class 10
          </Link>
          <Link to="/class/12" className="hover:text-blue-400">
            Class 12
          </Link>
          <Link to="/previous-papers" className="hover:text-blue-400">
            Previous Papers
          </Link>
          <Link to="/youtube" className="hover:text-blue-400">
            YouTube
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black-800 px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/class/10"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Class 10
          </Link>
          <Link
            to="/class/12"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Class 12
          </Link>
          <Link
            to="/previous-papers"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Previous Papers
          </Link>

          <Link
            to="/youtube"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            YouTube
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
