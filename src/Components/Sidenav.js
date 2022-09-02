import { NavLink } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";

const SideNav = (props) => {
  return (
    <div
      className={`${"fixed z-50 top-0 bottom-0  bg-black text-white text-md w-6/12 md:w-4/12 px-4 py-16 transition-all ease-in-out duration-1000"} ${
        props.menu ? "left-0" : "-left-[500px]"
      }`}
    >
      <div>
        <XIcon
          className="text-white h-6 w-6 ml-auto"
          onClick={props.onClick}
        />
      </div>
      <ul className="">
        <li className="my-6">
          <NavLink end to="/men" onClick={props.onClick}>
            Men
          </NavLink>
        </li>
        <li className="my-6">
          <NavLink end to="/women" onClick={props.onClick}>
            Women
          </NavLink>
        </li>
        <li className="my-6">
          <NavLink end to="/accessories"onClick={props.onClick}>
            Accessories
          </NavLink>
        </li>
        <li className="bg-header px-12 py-3 text-lg my-6">
          <div className="mx-auto text-center">
            <NavLink to="/login">Login</NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
