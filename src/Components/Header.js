import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthenticationContext";

import { NavLink, Link } from "react-router-dom";
import { MenuAlt4Icon } from "@heroicons/react/solid";

import logo from "../Resources/logo.jpeg";
import SideNav from "./Sidenav";

const Header = () => {
  const { userData, Logout } = useAuth();
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
        <a href="#footer">
          <p className=" text-white w-full h-full text-md marquee">
            Click on the banner to go to designer sign up
          </p>
        </a>
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
                      if (userData) {
                        Logout();
                      }
                      setAccountDropDown(false);
                      setMenu(false);
                    }}
                    to={userData ? "/" : "/login"}
                    className="bg-header rounded-md w-full block text-white py-1 px-0.5"
                  >
                    {!userData ? <>Sign In</> : <>Log Out</>}
                  </Link>
                </li>
                {!userData ? (
                  <>
                    <li className=" py-2">
                      <NavLink
                        end
                        to="/login"
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
                        to="/login"
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
                        to="/login"
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
                  </>
                ) : (
                  <></>
                )}
                {userData?.role === "customer" ? (
                  <>
                    <li className=" py-2">
                      <NavLink
                        end
                        to={
                          width > 640
                            ? "/profile/account-information"
                            : "/profile/account"
                        }
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
                        to={
                          width > 640
                            ? "/profile/orders"
                            : "/profile/order"
                        }
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
                  </>
                ) : (
                  <></>
                )}
                {userData?.role === "designer" ? (
                  <>
                    <li className="py-2">
                      <NavLink
                        end
                        to="/profile/designer"
                        className="flex items-center"
                        onClick={() => {
                          setAccountDropDown(false);
                          setMenu(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                          fill="CurrentColor"
                        >
                          <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM160 112c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM112 448c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
                        </svg>{" "}
                        <p className="w-10/12 ml-3">Designer</p>
                      </NavLink>
                    </li>

                    <li className="py-2">
                      <NavLink
                        end
                        to="/profile/designer-product-upload"
                        className="flex items-center"
                        onClick={() => {
                          setAccountDropDown(false);
                          setMenu(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="w-5 h-5"
                          fill="CurrentColor"
                        >
                          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" />
                        </svg>{" "}
                        <p className="w-10/12 ml-3">Products</p>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}
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
