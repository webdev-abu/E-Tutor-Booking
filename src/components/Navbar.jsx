import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
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
          Find tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-black"
          }
        >
          Add Tutorials
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-black"
          }
        >
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-black"
          }
        >
          My booked tutors
        </NavLink>
      </li>
    </>
  );

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
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
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
            {links}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Join Now Button */}
      <div className="hidden lg:flex">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link className="justify-between my-1 py-2">
                    {user?.displayName}
                  </Link>
                </li>
                <li>
                  <Link className="justify-between my-1 py-2" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary text-white gap-2">
              Join Now
              <FaArrowRight />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
