import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100 shadow-lg">
      {/* Logo Section */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-primary text-2xl font-bold"
        >
          <span className="bg-primary rounded p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </span>
          eLEARNING
        </NavLink>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              COURSES
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg z-10 lg:hidden">
          <ul className="menu menu-vertical px-4 py-2 gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                COURSES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Join Now Button */}
      <div className="hidden lg:flex">
        <Link to="/login">
          <button className="btn btn-primary text-white gap-2">
            Join Now
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
