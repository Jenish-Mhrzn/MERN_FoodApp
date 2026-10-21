import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodTableItems from "../../components/AdminComponents/FoodTableItems";

const Page = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFoods = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:5000/food");
      setFoods(response.data.data);
    } catch (err) {
      setError("Failed to fetch food items. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteFood = async (mongoId) => {
    try {
      setError("");

      await axios.delete(`http://localhost:5000/food/${mongoId}`);
      await fetchFoods();
    } catch (err) {
      setError("Failed to delete food item. Please try again.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl font-semibold">All Foods</h1>

      {error && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-600">
          {error}
          <button
            onClick={fetchFoods}
            className="ml-3 font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      <div className="relative mt-4 h-[70vh] max-w-[700px] overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="bg-gray-400 text-left text-sm text-gray-500 uppercase">
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
            {loading ? (
              <tr>
                <td colSpan="5" className="py-10 text-center text-gray-600">
                  Loading food items...
                </td>
              </tr>
            ) : foods.length === 0 && !error ? (
              <tr>
                <td colSpan="5" className="py-10 text-center text-gray-600">
                  No food items found.
                </td>
              </tr>
            ) : (
              foods.map((item, index) => (
                <FoodTableItems
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  foodImg={item.image}
                  mongoId={item._id}
                  deleteFood={deleteFood}
                  showBorder={index + 1 !== foods.length}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;