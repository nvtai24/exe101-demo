import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", path: "/", icon: "fas fa-home" },
    { name: "AI Planner", path: "/ai-planner", icon: "fas fa-robot" },
    { name: "Điểm đến", path: "/destinations", icon: "fas fa-map-marker-alt" },
    { name: "Tours", path: "/tours", icon: "fas fa-route" },
    { name: "Cộng đồng", path: "/community", icon: "fas fa-users" },
    { name: "Giới thiệu", path: "/about", icon: "fas fa-info-circle" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo_name.png"
              alt="TravelTech Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary-100 text-primary-700 shadow-sm"
                    : "text-gray-500 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn btn-primary group">
              <i className="fas fa-envelope mr-2 group-hover:scale-110 transition-transform"></i>
              Liên hệ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-primary-100 text-primary-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  <i className={`${item.icon} text-lg w-5`}></i>
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Đặt tour ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
