import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";


const Cart = () => {
  const Products = useSelector((state) => state.products.cartItems);
  console.log(Products);
  if (Products.length === 0) {
    return (
      // empyt cart
      <div>
        <div className="flex items-center justify-between py-3 px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">Your Cart Is Empty</h1>
          <Link to={"/"}>
            {" "}
            <button className="mt-12 px-8 py-3 rounded-3xl bg-black text-white transition-colors hover:bg-gray-900 cursor-pointer">
              Go To Home
            </button>
          </Link>
        </div>
        <Category />
        <Newsletter />
        <Footer />
      </div>
    );
  }
  return (
    <div className="max-w-[1640px] mx-auto px-5">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="flex items-center gap-2 ">
          <Link
            to={"/"}
            className=" bg-black text-white items-center px-2 py-2 rounded-xl"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row ">
        <div className="w-full xl:w-7/12 flex flex-col gap-3 ">
          {/* cartItems */}
          {Products.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>

        {/* cartSummary */}
        <div className="w-full xl:w-5/12 ">
          <CartSummary />
        </div>
      </div>
      <Category />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
