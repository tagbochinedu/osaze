import { NavLink, Outlet } from "react-router-dom";

import Card from "../../../../Components/UI/Card";

const Orders = () => {
  return (
    <Card pageTitle="Orders">
      <div className="px-6 py-4 border-2 border-border-gray-300 rounded-sm my-6 mx-4 min-h-[50vh]">
        <ul className="flex justify-center py-3">
          <li className="mx-4 font-semibold">
            <NavLink
              to="/profile/orders/orders-pending"
              className={({ isActive }) =>
                isActive ? "underline py-4" : "hover:underline"
              }
            >
              Pending Orders
            </NavLink>
          </li>
          <li className="mx-4 font-semibold">
            <NavLink
              to="/profile/orders/orders-complete"
              className={({ isActive }) =>
                isActive ? "underline py-4" : "hover:underline"
              }
            >
              Completed Orders
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </Card>
  );
};

export default Orders;
