import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodTableItems from "../../components/AdminComponents/FoodTableItems";

const page = () => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:5000/food");
    setFoods(response.data.data);
    console.log(response.data.data);
  };
  const deleteFood = async (mongoId) => {
    const response = await axios.delete(
      `http://localhost:5000/food/${mongoId}`,
    );
    fetchFoods();
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[70vh] max-w-[700px] mt-4 overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full  text-sm text-gray-500">
          <thead className="text-sm text-gray-500 text-left uppercase bg-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Food Image
              </th>

              <th scope="col" className="px-6 py-3">
                Food Name
              </th>

              <th scope="col" className="px-6 py-3">
                Food Price
              </th>

              <th scope="col" className="px-6 py-3">
                Food Category
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {foods.map((item, index) => {
              return (
                <FoodTableItems
                  key={index}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  foodImg={item.image}
                  mongoId={item._id}
                  deleteFood={deleteFood}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
