import React from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment, removeFromCart } from "../reducer/CartSlice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncrement = () => {
    dispatch(Increment(item.id));
  };
  const handleDecrement = () => {
    dispatch(Decrement(item.id));
  };
  return (
    <div className="rounded-3xl border border-neutral-300 xl:w-11/12">
      <div className="flex flex-col items-center  gap-6 px-4  py-3 sm:flex-row sm:items-center">
        <img src={item.image} alt="" className="h-50 w-50 object-fit rounded-xl" />
        <div className="flex w-full flex-col gap-2 ">
          <div className="flex  justify-between">
            <div className="flex  gap-3 text-sm">
              <span className="font-semibold">Name:</span>
              <span className="text-gray-600">{item.name}</span>
            </div>

            <div className="px-10">
              <FaTrash
                size={20}
                className=" cursor-pointer text-2xl"
                onClick={() => handleRemove()}
              />
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="font-semibold">Category:</span>
            <span className="text-gray-600">{item.category}</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold xl:text-3xl">
              Price: ${item.price}
            </h1>
            <div className="flex h-11 items-center gap-4 rounded-3xl bg-gray-50 px-4">
              <FaMinus
                className=" cursor-pointer text-2xl"
                onClick={() => handleDecrement()}
              />
              <span className="text-xl">{item.quantity}</span>
              <FaPlus
                className=" cursor-pointer text-2xl"
                onClick={() => handleIncrement()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
