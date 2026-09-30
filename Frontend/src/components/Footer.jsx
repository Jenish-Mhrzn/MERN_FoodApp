import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="border-b-2 border-black mb-3"></div>
      <div className="flex flex-col sm:flex-row justify-between sm:px-5 space-y-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div>
          <h2 className="text-lg lg:text-xl text-neutral-700">&copy;copyright BestEats@2026</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
