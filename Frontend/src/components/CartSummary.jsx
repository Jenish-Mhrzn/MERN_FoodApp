import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = subtotal * 0.2;

  const discountTotal = subtotal - discount;

  const total = totalItems > 3 ? discountTotal : subtotal;
  return (
    <div className="rounded-3xl border border-neutral-300 p-4 xl:p-6 xl:w-full xl:h-auto">
      <h1 className="mb-4 text-2xl font-semibold xl:text-3xl">Order Summary</h1>

      <div className="space-y-2 text-sm xl:text-base">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">${subtotal}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Total Items</p>
          <p className="font-semibold">{totalItems}</p>
        </div>

        {totalItems > 3 && (
          <div className="flex justify-between">
            <p>Discount (-20%)</p>
            <p>-${discount}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between text-lg font-semibold xl:text-xl">
        <p>Total</p>
        <p>${total}</p>
      </div>

      <button className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-3xl bg-black text-white transition-colors hover:bg-gray-900">
        Go to Checkout
        <i className="bx bx-arrow-right text-2xl"></i>
      </button>
    </div>
  );
};

export default CartSummary;
