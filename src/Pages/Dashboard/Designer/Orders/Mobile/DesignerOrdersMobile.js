import { NavLink, Outlet, Link } from "react-router-dom"

const Orders = () => {
  return (
    <div className="w-full lg:rounded-lg shadow-md shadow-gray-200 border border-gray-400">
      <div className="flex justify-start items-center py-4 px-6 border-b border-gray-400 ">
        <Link to="/profile/designer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
        <h1 className="font-bold text-xl uppercase text-black">Designer Orders</h1>
      </div>
      <div className="px-6 py-4 border-2 border-border-gray-300 rounded-sm my-6 mx-4">
        <ul className="flex justify-center py-3">
          <li className="mx-4 font-semibold">
            <NavLink
              to="/profile/designers-orders/open-orders"
              className={({ isActive }) =>
                isActive ? "underline py-4" : "hover:underline"
              }
            >
            Open Orders
            </NavLink>
          </li>
          <li className="mx-4 font-semibold">
            <NavLink
              to="/profile/designers-orders/finished-orders"
              className={({ isActive }) =>
                isActive ? "underline py-4" : "hover:underline"
              }
            >
              Finished Orders
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;
