import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import axios from "axios";

import { Link } from "react-router-dom";

const Food = () => {
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("default");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:5000/food");
      setData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log("Error while fetching", err);
      setError("Failed to load food items. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12" id="food">
      <h1 className="text-4xl font-bold text-center text-orange-500">
        Top Rated Menu Items
      </h1>
      {/* search input */}
      <div className="flex bg-gray-200 rounded-full items-center px-2 mx-auto mt-8 w-[300px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search food and drinks"
          className="p-2 outline-none w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
            <button
              className={
                type === "drinks"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setType("drinks")}
            >
              Drink's
            </button>
          </div>
        </div>

        {/* price filter */}
        <div>
          <p className="font-bold text-neutral-700 mb-2">Filter price</p>
          <div className="flex gap-3 flex-wrap">
            <button
              className={
                price === "default"
                  ? "border px-3 py-1 rounded-lg bg-black text-white"
                  : "border px-3 py-1 rounded-lg"
              }
              onClick={() => setPrice("default")}
            >
              Default
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
      {loading ? (
        <p className="text-center text-lg font-semibold py-10">
          Loading food items...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 font-semibold py-10">
          {error}
          <button onClick={fetchData} className="ml-3 underline text-blue-600">
            Try again
          </button>
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {data
            .filter((item) => (type == "All" ? true : item.category == type))
            // .filter((item) => (price == "All" ? true : item.price == price))
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()),
            )
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
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className=" border-white shadow-lg hover:scale-105 duration-300 rounded-t-xl">
                  <img
                    src={`http://localhost:5000/images/${item.image}`}
                    alt=""
                    className="w-full h-[200px] object-cover rounded-t-xl"
                  />
                  <div className="flex px-2 py-3 justify-between">
                    <p className="font-bold">{item.name}</p>
                    <span className="bg-black text-white p-1 rounded-full">
                      Rs {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Food;
