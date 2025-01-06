import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { HeaderComponents, subHeader } from "../apis/HeroData";
import GoogleAuth from "../auth/GoogleAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [userImg, setImg] = useState<string | null>(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setImg(user.photoURL);
      } else {
        setImg(null);
      }
    });
  }, [auth]);

  return (
    <header className="w-full text-gray-100 bg-slate-900  fixed  z-50 top-0 left-0">
      {/* Subheader */}
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-center p-2">
        <h2 className="text-sm lg:text-md">{subHeader.data}</h2>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-xl">
          <img className="w-8 h-8" src={logo} alt="Logo of Dashboard_UI" />
          <span className="ml-2">Dashboard_UI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {HeaderComponents.map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className={`hover:text-red-200 hover:animate-pulse transition-all ${
                location.pathname === item.link ? "text-red-500 font-bold" : ""
              }`}
            >
              <p className="font-semibold flex items-center justify-center text-md">
                {item.icon} &nbsp; {item.title}
              </p>
            </Link>
          ))}
        </nav>

        {/* User Info and Demo Button */}
        <div className="flex items-center gap-4">
          {userImg ? (
            <img src={userImg} className="w-8 h-8 rounded-full" alt="User" />
          ) : (
            <GoogleAuth />
          )}
          <button
            aria-label="Book Demo"
            className="hidden md:inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
            onClick={() =>
              (window.location.href = "https://cal.com/DashboardUi")
            }
          >
            Book Demo
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Hamburger Menu */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            className="md:hidden text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 top-14 w-full z-50`}
      >
        <nav className="flex flex-col gap-2 p-4">
          {HeaderComponents.map((item, index) => (
            <Link
              key={index}
              to={item.link || "#"}
              className={`block text-gray-100 hover:text-red-200 transition-all ${
                location.pathname === item.link ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex justify-center mt-4">
            <button
              aria-label="Book Demo"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
              onClick={() =>
                (window.location.href = "https://cal.com/DashboardUi")
              }
            >
              Book Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
