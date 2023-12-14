import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const toggleCheckoutSideMenu = () => {
    if (context.isCheckoutSideMenuOpen) {
      context.closeCheckoutSideMenu();
    } else {
      context.openCheckoutSideMenu();
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-body top-0 bg-white">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg font-heading">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory()}
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("men's clothing")}
            to="/men-clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("women's clothing")}
            to="/woman-clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Woman's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("electronics")}
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("jewelery")}
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewellery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">Jonas@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li
          onClick={toggleCheckoutSideMenu}
          className="flex justify-center gap-1"
        >
          <ShoppingBagIcon className="w-4 cursor-pointer" />
          <span>{context.count}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
