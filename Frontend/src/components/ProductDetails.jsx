import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { BsCart } from "react-icons/bs";
import Category from "./Category";
import Food from "./Food";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducer/CartSlice";
import Newsletter from "./Newsletter";

const ProductDetails = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.cartItems);

  const totalItems = Products.reduce((sum, item) => sum + item.quantity, 0);

  // useEffect(() => {
  //   for (let i = 0; i < data.length; i++) {
  //     if (Number(productId) === data[i].id) {
  //       setDetails(data[i]);
  //       break;
  //     }
  //   }
  // }, [productId]);

  useEffect(() => {
    const product = data.find((item) => item.id === Number(productId));
    console.log("Found product:", product);

    if (product) {
      setDetails(product);
    }
  }, [productId]);

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
          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl"
          >
            <BsCart className="text-lg" />
            <span>Cart</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="py-12">
        {details && (
          <div>
            {/* breadcrumbs */}
            <div className="py-3 mb-3 px-4">
              <h1>Home / Product Details / {details.name}</h1>
            </div>

            <div className="py-3 mb-3 px-4 text-neutral-600">
              <h2>Get 20% off on more than 3 purchase</h2>
            </div>

            {/* product details section */}
            <div className="flex flex-col md:flex-row gap-9 py-3 px-4">
              <img
                src={details.image}
                alt={details.name}
                className="w-full max-w-md aspect-square object-cover rounded-2xl shadow-md mx-auto md:mx-0"
              />

              <div className="flex-1 max-w-4xl">
                <h2 className="text-3xl font-bold mb-3">{details.name}</h2>

                <p className="text-xl font-semibold mb-3">
                  Category: {details.category}
                </p>

                <p className="text-gray-600 leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  hic odit sint blanditiis, aperiam, excepturi quod recusandae
                  voluptates dolore earum neque! Repudiandae magni eos, ea
                  eligendi ipsam laudantium harum ex?
                </p>

                <span className="text-2xl font-bold">
                  Price: ${details.price}
                </span>
                <div className="mt-6">
                  <button
                    className="bg-blue-500 px-3 py-2  rounded-xl text-white shadow-md cursor-pointer"
                    onClick={() => dispatch(addToCart(details))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Category />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default ProductDetails;
