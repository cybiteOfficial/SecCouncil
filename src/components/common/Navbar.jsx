import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/Logo/Logo-Full-Dark.jpg";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import ProgressBar from "./progressbar";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        console.log(res);  // Check the response structure
        if (res?.data?.data) {
          setSubLinks(res.data.data); // Store categories
        }
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const matchRoute = (route) => location.pathname === route;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbarContainer sticky top-0 left-0 z-1000">
      <div className="flex items-center justify-center bg-black border-b-[1px] border-b-mwhite">
        <div className="flex flex-col md:flex-row w-full max-w-maxContent items-center justify-between px-4 py-2">
          <div className="flex items-center justify-between w-full md:w-auto px-1 py-1">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logo}
                alt="Logo"
                width={160}
                height={30}
                loading="lazy"
              />
            </Link>
            <button
              className="block md:hidden text-2xl text-mwhite focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? "✖" : <AiOutlineMenu />}
            </button>
          </div>
          <nav
            className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row w-full max-w-maxContent items-center justify-between px-4 py-2 gap-y-4 md:gap-y-0 md:gap-x-14">
              {NavbarLinks.map(({ title, path }, index) => (
                <li
                  key={index}
                  className="mb-2 md:mb-0 transition duration-300 ease-in-out transform hover:text-mwhite hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-700 after:ease-in-out hover:after:w-full"
                >
                  {title === "Catalog" ? (
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                        ? "text-yellow-100 hover:text-yellow-200"
                        : "text-mwhite hover:text-mwhite"
                        }`}
                      onClick={toggleDropdown}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <p>{title}</p>
                      <BsChevronDown />
                      {dropdownOpen && (
                        <div className="absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-black p-4 text-mwhite opacity-100 transition-all duration-150 group-hover:translate-y-[1.65em] lg:w-[300px]">
                          <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-black"></div>
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : subLinks && subLinks.length ? (
                            subLinks
                              .filter((subLink) => subLink?.courses?.length > 0)
                              .map((subLink, i) => {
                                const name = subLink.name || '';
                                return (
                                  <Link
                                    to={`/catalog/${name
                                      .split(" ")
                                      .join("-")
                                      .toLowerCase()}`}
                                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-gray-700"
                                    key={i}
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    <p className="text-mwhite">{name}</p>
                                  </Link>
                              );
                            })
                          ) : (
                            <p className="text-center">No Categories Found</p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={path} onClick={closeMobileMenu}>
                      <p
                        className={`${matchRoute(path)
                          ? "text-mwhite"
                          : "text-mwhite"
                          } hover:text-mwhite`}
                      >
                        {title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-2 md:mt-0`}
          >
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start gap-y-4 md:gap-y-0 gap-x-8">
              {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link
                  to="/dashboard/cart"
                  className="relative"
                  onClick={closeMobileMenu}
                >
                  <AiOutlineShoppingCart className="text-2xl text-mwhite" />
                  {totalItems > 0 && (
                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-500">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              {!token && (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4">
                  <Link to="/login" onClick={closeMobileMenu}>
                    <button
                      className={`rounded-md px-4 w-[90px] py-2 transition duration-300 hover:scale-95 ${matchRoute("/login")
                        ? "bg-richblack-800 text-white"
                        : "bg-gradient-to-r from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-white "
                        }`}
                    >
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup" onClick={closeMobileMenu}>
                    <button
                      className={`rounded-md px-4 w-[90px] py-2 transition duration-300 hover:scale-95 ${matchRoute("/signup")
                        ? "bg-richblack-800 text-white"
                        : "bg-gradient-to-r from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-white hover:bg-mwhite hover:white "
                        }`}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
              {token && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default Navbar;
