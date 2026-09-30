import React, { useState } from "react";
import { data } from "../data/data";
import { Link } from "react-router-dom";

const Food = () => {
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("All");

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12" id="food">
      <h1 className="text-4xl font-bold text-center text-orange-500">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col md:flex-row justify-between py-6 gap-4">
        {/* fiter type */}
        <div>
          <p className="font-bold text-neutral-700 mb-2">Filter Type</p>
          <div className="flex gap-3 flex-wrap">
            <button
              className={
                type === "All"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("All")}
            >
              All
            </button>
            <button
              className={
                type === "burger"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("burger")}
            >
              Burger
            </button>
            <button
              className={
                type === "pizza"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("pizza")}
            >
              Pizza
            </button>
            <button
              className={
                type === "salad"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("salad")}
            >
              Salad
            </button>
            <button
              className={
                type === "chicken"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* price filter */}
        <div>
          <p className="font-bold text-neutral-700 mb-2">Filter price</p>
          <div className="flex gap-3 flex-wrap">
            <button
              className={
                price === "All"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setPrice("All")}
            >
              All
            </button>
            <button
              className={
                price === "Low"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setPrice("Low")}
            >
              Low to High
            </button>

            <button
              className={
                price === "High"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setPrice("High")}
            >
              High to Low
            </button>
          </div>
        </div>
      </div>

      {/* display food */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data
          .filter((item) => (type == "All" ? true : item.category == type))
          // .filter((item) => (price == "All" ? true : item.price == price))
          .sort((a, b) => {
            if (price === "Low") {
              return a.price - b.price;
            }
            if (price === "High") {
              return b.price - a.price;
            }

            return 0;
          })
          .map((item) => (
            <Link to={`/product/${item.id}`}>
              <div
                key={item.id}
                className=" border-white shadow-sm hover:scale-105 duration-300 rounded-t-xl"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[200px] object-cover rounded-t-xl"
                />
                <div className="flex px-2 py-3 justify-between">
                  <p className="font-bold">{item.name}</p>
                  <span className="bg-black text-white p-1 rounded-full">
                    $ {item.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Food;
