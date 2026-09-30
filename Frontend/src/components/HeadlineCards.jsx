import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-xl px-2 pt-3">Free Fries on Us</p>
          <p className="px-2">Limited time offer</p>
          <a
            href="#food"
            className="bg-white mx-2 p-2 text-black rounded-lg absolute bottom-4 cursor-pointer"
          >
            Order now
          </a>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Fresh Bites Daily</p>
          <p className="px-2">Made to order</p>
          <a
            href="#food"
            className="bg-white mx-2 p-2 text-black rounded-lg absolute bottom-4 cursor-pointer"
          >
            Order now
          </a>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Ending</p>
          <p className="px-2">Tasty Treats</p>
          <a
            href="#food"
            className="bg-white mx-2 p-2 text-black rounded-lg absolute bottom-4 cursor-pointer"
          >
            Order now
          </a>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
