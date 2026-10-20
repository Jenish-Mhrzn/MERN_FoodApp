import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const Products = useSelector((state) => state.products.cartItems);
  const totalItems = Products.reduce((sum, item) => sum + item.quantity, 0);
  const closeMenu = () => setNav(false);

  return (
    <>
      {/* Navbar */}
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Icon */}
          <div onClick={() => setNav(!nav)}>
            <AiOutlineMenu size={30} className="cursor-pointer sm:hidden" />
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Cravely"
              className="h-10 w-auto object-contain"
            />

            <h1 className="text-2xl md:text-3xl lg:text-4xl pr-2">
              Crave<span className="font-bold">ly</span>
            </h1>
          </div>

          {/* Delivery / Pickup */}
          <div className="hidden sm:flex items-center bg-gray-200 rounded-full p-1 text-[12px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Decorative Tagline */}
        <div className="hidden md:flex items-center gap-2 text-gray-500">
          <span className="text-2xl lg:text-4xl">🍔</span>
          <p className="text-2xl lg:text-4xl italic">Good Food, Good Mood.</p>
        </div>

        {/* Cart Button */}
        <Link to="/cart" className="relative">
          <button className="hidden sm:flex bg-black text-white items-center px-3 py-2 rounded-xl hover:bg-gray-800 transition-colors">
            <BsCart className="mr-2" />
            Cart
          </button>

          {/* Cart Item Count */}
          {totalItems > 0 && (
            <span className="hidden sm:flex absolute -top-2 -right-2 h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {nav && (
        <div className="fixed inset-0 bg-black/80 z-40" onClick={closeMenu} />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed bg-white w-64 h-screen top-0 z-50 duration-300 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* Close Button */}
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={closeMenu}
        />

        {/* Drawer Logo */}
        <div className="flex items-center p-4">
          <img src={logo} alt="Cravely" className="h-9 w-auto object-contain" />

          <h1 className="text-2xl">
            Crave<span className="font-bold">ly</span>
          </h1>
        </div>

        {/* Mobile Navigation */}
        <nav>
          <ul className="flex flex-col p-4 text-neutral-600">
            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="relative text-xl py-4 flex items-center hover:text-black"
              >
                <BsCart size={25} className="mr-2" />
                Cart
                {totalItems > 0 && (
                  <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Drawer Tagline */}
        <p className="px-4 mt-4 text-lg italic text-gray-500">
          🍔 Good Food, Good Mood.
        </p>
      </div>
    </>
  );
};

export default Navbar;
