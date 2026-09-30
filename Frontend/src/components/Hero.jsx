import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[600px] relative  rounded-xl">
        {/* overlay */}
        <div className="absolute text-white h-full w-full flex flex-col justify-center bg-black/40 max-h-[600px]  rounded-xl">
          <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hungry?
          </h1>
          <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            We've Got You Covered
          </h1>
        </div>

        <img
          className="w-full max-h-[600px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
