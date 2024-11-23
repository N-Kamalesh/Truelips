import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Truelips</Link>
        </div>

        <div className="hidden space-x-8 font-bold text-gray-600 md:flex">
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "underline-offset-4 hover:text-blue-600 hover:underline"
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "underline-offset-4 hover:text-blue-600 hover:underline"
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "underline-offset-4 hover:text-blue-600 hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "underline-offset-4 hover:text-blue-600 hover:underline"
            }
          >
            Pricing
          </NavLink>
        </div>

        <div className="hidden items-center space-x-4 font-semibold md:flex">
          <Link to="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check Our Prices
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-start space-y-4 px-6 py-4 text-lg text-gray-800">
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                isActive
                  ? "w-full font-bold text-blue-600"
                  : "w-full hover:text-blue-600"
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "w-full font-bold text-blue-600"
                  : "w-full hover:text-blue-600"
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "w-full font-bold text-blue-600"
                  : "w-full hover:text-blue-600"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "w-full font-bold text-blue-600"
                  : "w-full hover:text-blue-600"
              }
            >
              Pricing
            </NavLink>
          </div>

          <div className="mt-auto flex flex-col items-center space-y-2 border-t px-6 py-4">
            <Link to="/login" className="text-lg text-blue-600">
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full max-w-sm rounded-md bg-blue-600 px-6 py-3 text-center text-white"
            >
              Check Our Prices
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
