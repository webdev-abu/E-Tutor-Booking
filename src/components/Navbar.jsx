import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight, FaMoon, FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-[16px] font-Heebo font-semibold"
              : "text-black text-[16px] font-Heebo font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-tutors"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-[16px] font-Heebo font-semibold"
              : "text-black text-[16px] font-Heebo font-semibold"
          }
        >
          All Tutors
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/Add-Tutorials"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[16px] font-Heebo font-semibold"
                  : "text-black text-[16px] font-Heebo font-semibold"
              }
            >
              Add Tutorials
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-tutorials"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[16px] font-Heebo font-semibold"
                  : "text-black text-[16px] font-Heebo font-semibold"
              }
            >
              My Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booked-tutors"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-[16px] font-Heebo font-semibold"
                  : "text-black text-[16px] font-Heebo font-semibold"
              }
            >
              My booked tutors
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-[16px] font-Heebo font-semibold"
              : "text-black text-[16px] font-Heebo font-semibold"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <div className="flex-none mr-6">
        <button className="" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "light" ? (
            <FaMoon className="text-xl text-gray-600 dark:text-gray-200" />
          ) : (
            <FaSun className="text-xl text-yellow-400" />
          )}
        </button>
      </div>
    </>
  );

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-base-100 shadow-md z-50 items-center ">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
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
            eTUTOR
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            {links}
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
              {links}
              {user ? (
                <>
                  <li>
                    <Link
                      className="justify-between my-1 py-2"
                      onClick={logOut}
                    >
                      Logout
                    </Link>
                  </li>
                  {/* <div className="dropdown dropdown-end">
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
                      <Link
                        className="justify-between my-1 py-2"
                        onClick={logOut}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div> */}
                </>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary text-white gap-2">
                    Join Now
                    <FaArrowRight />
                  </button>
                </Link>
              )}
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
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link className="justify-between my-1 py-2">
                      {user?.displayName}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="justify-between my-1 py-2"
                      onClick={logOut}
                    >
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
      </div>
    </nav>
  );
};

export default Navbar;
