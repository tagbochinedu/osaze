import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthenticationContext";

const Dashboard = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //Screen-Resize Functionality
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);
  const { userData } = useAuth();
  return (
    <div className="relative flex justify-between font-merri md:px-3 md:py-1 lg:px-6 lg:py-4">
      <div className=" h-[91vh] md:h-64 w-full md:border lg:border-2 border-gray-200 md:shadow-md shadow-gray-200 lg:rounded-lg md:w-3/12 lg:w-2/12 bg-header text-white">
        <h1 className="border-b border-gray-400 font-bold py-4 px-6 text-xl uppercase text-white block md:hidden">
          Profile
        </h1>
        <ul className="md:text-sm lg:text-md">
          {userData.role === "customer" && (
            <>
              <li className=" border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={
                    width > 640
                      ? "/profile/account-information"
                      : "/profile/account"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Account Information
                </NavLink>
              </li>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={
                    width > 640
                      ? "/profile/body-profile"
                      : "/profile/body"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Body Profile
                </NavLink>
              </li>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={
                    width > 640
                      ? "/profile/orders"
                      : "/profile/order"
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Orders
                </NavLink>
              </li>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to="/profile/inbox"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Inbox
                </NavLink>
              </li>
            </>
          )}
          {userData.role === "designer" && (
            <>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={width > 640 ? "/profile/designer" : "/profile/designers"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Designer
                </NavLink>
              </li>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={width > 640 ? "/profile/designer-product-upload" : "/profile/designers-product-upload"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Product Upload
                </NavLink>
              </li>
              <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-xs">
                <NavLink
                  to={width > 640 ? "/profile/designer-orders" : "/profile/designers-orders"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-black border-x-4 text-xs flex justify-center md:justify-start md:items-center py-6 md:px-5"
                      : "flex justify-center md:justify-start md:items-center py-6 md:px-5 text-sm"
                  }
                >
                  Designer Orders
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
