import { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";
import { MenuAlt4Icon } from "@heroicons/react/solid";

import logo from "../Resources/logo.jpeg";
import SideNav from "./Sidenav";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const [accountDropDown, setAccountDropDown] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width > 1024) {
      setMenu(false);
    }
  }, [width]);

  return (
    <>
      <div className="bg-header py-0.5 overflow-hidden hidden lg:block">
        <p className=" text-white w-full h-full text-md marquee">
          Shop up to 50% of our selected ready to wear items from designers all
          across the world.
        </p>
      </div>
      <div className="text-white sticky top-0 z-40 flex justify-between items-center bg-black px-4 py-2 lg:pl-6 lg:pr-20 font-julius font-semibold">
        <div className="lg:w-3/12 w-10/12 flex justify-between items-center">
          <div className="flex justify-between items-center lg:hidden w-3/12">
            <MenuAlt4Icon
              className="text-white h-8 w-8"
              onClick={() => {
                setMenu(true);
              }}
            />
          </div>
          <Link to="/" className="w-9/12 lg:w-full">
            <img
              src={logo}
              alt="logo"
              className="lg:w-52 lg:h-20 w-28 h-10 mx-auto lg:mx-0"
              onClick={() => {
                setMenu(false);
              }}
            />
          </Link>
        </div>
        <div className="md:w-5/12 hidden lg:block xl:px-24 lg:px-10 mr-24">
          <ul className="lg:flex justify-between items-center">
            <li className="">
              <NavLink
                end
                to="/men"
                onClick={() => {
                  setMenu(false);
                }}
                className={({ isActive }) =>
                  isActive ? "underline py-4" : "hover:underline"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/women"
                onClick={() => {
                  setMenu(false);
                }}
                className={({ isActive }) =>
                  isActive ? "underline py-4" : "hover:underline"
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/accessories"
                onClick={() => {
                  setMenu(false);
                }}
                className={({ isActive }) =>
                  isActive ? "underline py-4" : "hover:underline"
                }
              >
                Accessories
              </NavLink>
            </li>
          </ul>{" "}
        </div>
        <div className="lg:w-1/12 max-w-[90px] w-3/12">
          <ul className="flex justify-between items-center">
            <div className="relative">
              <li
                className="bg-header p-2 rounded-full text-xl cursor-pointer"
                onClick={() => {
                  setAccountDropDown(!accountDropDown);
                  setMenu(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                </svg>
              </li>
              <ul
                className={`${"absolute mt-3 w-48 border-gray-200 rounded-sm py-2 px-3 border-2 lg:-left-[75px] -left-[140px] bg-white text-black w-full transition-all ease-in-out duration-1000"} ${
                  accountDropDown
                    ? "top-[40px] opacity-100"
                    : "-top-[300px] opacity-0"
                }`}
              >
                <li className="border-b text-center py-2">
                  <Link
                    onClick={() => {
                      setAccountDropDown(false);
                      setMenu(false);
                    }}
                    to="/signup"
                    className="bg-header rounded-md w-full block text-white py-1 px-0.5"
                  >
                    Log In
                  </Link>
                </li>
                <li className=" py-2">
                  <NavLink
                    end
                    to="/profile"
                    className="flex items-center"
                    onClick={() => {
                      setAccountDropDown(false);
                      setMenu(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                    </svg>{" "}
                    <p className="w-10/12 ml-3">My Account</p>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    end
                    to="/profile/orders"
                    className="flex items-center"
                    onClick={() => {
                      setAccountDropDown(false);
                      setMenu(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z" />
                    </svg>{" "}
                    <p className="w-10/12 ml-3">Orders</p>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    end
                    to="/profile/wishlist"
                    className="flex items-center"
                    onClick={() => {
                      setAccountDropDown(false);
                      setMenu(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                    </svg>{" "}
                    <p className="w-10/12 ml-3">WishList</p>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    end
                    to="/profile/inbox"
                    className="flex items-center"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="CurrentColor"
                      className="w-5 h-5"
                    >
                      <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                    </svg>
                    <p className="w-10/12 ml-3">Inbox</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <li className="cursor-pointer">
              <Link
                to="/cart"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cart-shopping"
                  className="w-6 h-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <SideNav
          onClick={() => {
            setMenu(false);
          }}
          menu={menu}
        />
      </div>
    </>
  );
};

export default Header;
