import React, { useState } from "react";

const FoodTableItems = ({
  name,
  price,
  category,
  foodImg,
  mongoId,
  deleteFood,
  showBorder,
}) => {
  return (
    <tr className={`bg-white ${showBorder ? "border-b" : ""}`}>
      {/* Image */}
      <td className="px-6 py-4">
        <img
          src={`http://localhost:5000/images/${foodImg}`}
          width={40}
          height={40}
        />
      </td>

      {/* Name */}
      <td className="px-6 py-4">{name ? name : "No name"}</td>

      {/* Price */}
      <td className="px-6 py-4">{price ? price : "No price"}</td>

      {/* Category */}
      <td className="px-6 py-4">{category ? category : "No category"}</td>

      {/* Delete */}
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteFood(mongoId)}
      >
        X
      </td>
    </tr>
  );
};

export default FoodTableItems;
