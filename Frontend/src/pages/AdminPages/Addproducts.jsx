import React, { useState } from "react";
import uploadArea from "../../assets/upload_area.png";
import axios from "axios";

const Addproducts = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    image: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/food", formData);
      if (response.data.success) {
        console.log("Successfully created");
        setData({ name: "", price: "", category: "", description: "" });
        setImage(false);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="px-10 lg:px-20 max-w-[700px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-3 ">
          <h2 className="text-xl lg:text-2xl">Upload Image</h2>
          <label htmlFor="image">
            <img
              className="mt-4"
              src={!image ? uploadArea : URL.createObjectURL(image)}
              width={140}
              height={70}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>
        <div className="flex flex-col py-5">
          <label htmlFor="" className="text-xl lg:text-2xl mb-2">
            Name
          </label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter food name"
            className="border rounded-xl p-3 outline-none"
            required
          />
        </div>

        <div className="flex flex-col py-5">
          <label htmlFor="" className="text-xl lg:text-2xl mb-2">
            Category
          </label>
          {/* <select
            className="border rounded-xl p-3 outline-none overflow-x-auto"
            name=""
          >
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="salad">Salad</option>
            <option value="chicken">Chicken</option>
          </select> */}
          <input
            name="category"
            value={data.category}
            onChange={handleChange}
            type="text"
            placeholder="Enter food category in lowercase"
            className="border rounded-xl p-3 outline-none"
            required
          />
        </div>
        <div className="flex flex-col py-5">
          <label htmlFor="" className="text-xl lg:text-2xl mb-2">
            Price (Rs)
          </label>
          <input
            name="price"
            value={data.price}
            onChange={handleChange}
            type="number"
            min="1"
            placeholder="Enter food price"
            className="border rounded-xl p-3 outline-none"
            required
          />
        </div>
        <div className="flex flex-col py-3">
          <label htmlFor="" className="text-xl lg:text-2xl mb-2">
            Descritpion
          </label>
          <textarea
            className="border rounded-xl p-3 outline-none mb-2"
            placeholder="Enter description of the product"
            name="description"
            onChange={handleChange}
            value={data.description}
            required
          />
        </div>
        <button
          className="text-xl lg:text-2xl bg-blue-500 px-10 py-2 rounded-xl text-white mb-3"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Addproducts;
