import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="relative flex justify-between font-merri md:px-3 md:py-1 lg:px-6 lg:py-4">
      <div className="h-[90vh] w-full md:border lg:border-2 border-gray-200 md:shadow-md shadow-gray-200 lg:rounded-lg md:w-3/12 lg:w-2/12 bg-header text-white">
      <h1 className='border-b border-gray-400 font-bold py-4 px-6 text-xl uppercase text-white block md:hidden'>Profile</h1>
        <ul className='md:text-sm lg:text-md'>
          <li className=" border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/account-information" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Account Information</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/body-profile" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Body Profile</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/orders" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Orders</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/wishlist" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>WishList</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/inbox" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Inbox</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/designer" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Designer</NavLink>
          </li>
          <li className="border-b border-gray-300 hover:bg-gray-100 hover:text-black hover:border-x-4 hover:text-sm">
            <NavLink to="/profile/designer-product-upload" className={({ isActive }) => (isActive ? 'bg-gray-100 text-black border-x-4 text-sm flex justify-center md:justify-start md:items-center py-6 md:px-5' : 'flex justify-center md:justify-start md:items-center py-6 md:px-5')}>Product Upload</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
