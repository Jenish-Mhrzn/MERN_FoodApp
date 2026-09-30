import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCart, BsSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const Products = useSelector((state) => state.products.cartItems);

  const totalItems = Products.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className="cursor-pointer" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center  bg-gray-200 rounded-full p-1 text-[12px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search food"
          className="p-2 outline-none w-full"
        />
      </div>

      {/* Cart button */}
      <Link to="/cart" className="relative">
        <button className="hidden md:flex bg-black text-white items-center px-2 py-2 rounded-xl">
          <BsCart className="mr-2" />
          Cart
        </button>
        <div className="hidden md:flex">
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>
      </Link>

      {/* mobile menu */}

      {/* overlay */}
      {nav ? (
        <div className="fixed w-full h-screen bg-black/80  top-0 left-0 z-10 ">
          {" "}
        </div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? " fixed bg-white w-64 h-screen top-0 left-0 z-10 duration-300"
            : " fixed bg-white w-64 h-screen top-0 left-[-100%] z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(false)}
        />
        <h1 className="p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <nav>
          <ul className="flex flex-col p-4 text-neutral-600">
            <li className="md:hidden relative">
              <Link to={"/cart"} className="text-xl py-4 flex items-center">
                <BsCart size={25} className="mr-2  " /> Cart
              </Link>
              {totalItems > 0 && (
                <span className="absolute top-3 left-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </li>

            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={25} className="mr-2 " /> Orders
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdFavorite size={25} className="mr-2 " /> Favourites
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaWallet size={25} className="mr-2 " /> Wallet
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaWallet size={25} className="mr-2 " /> Help
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdHelp size={25} className="mr-2 " /> Promotions
            </li>
            <li className="text-xl py-4 flex items-center">
              <BsSaveFill size={25} className="mr-2 " /> Best Ones
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUserFriends size={25} className="mr-2 " /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
