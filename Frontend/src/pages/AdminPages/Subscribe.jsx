import React, { useState } from "react";
import axios from "axios";
const Newsletter = () => {
  const [email, setEmail] = useState("");
 
  return (
    <div className="px-5">
      {" "}
      <div className="w-full min-h-[40vh] flex flex-col px-5 items-center justify-center mx-auto mb-20 sm:mb-28 lg:mb-[150px] sm:px-10 lg:px-[140px] gap-5 sm:gap-6 lg:gap-[30px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
        {" "}
        <p> Subscribe to our newsletter and stay updated </p>{" "}
        <form
          className="flex items-center justify-center w-full max-w-[730px] h-[40px] sm:h-[50px] lg:h-[55px] rounded-full border border-[#e3e3e3] overflow-hidden"
          onSubmit={onSubmitHandler}
        >
          {" "}
          <input
            name="subscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email id"
            className="flex-1 min-w-0 h-full px-4 sm:px-6 lg:px-8 border-none outline-none text-[#616161] text-sm sm:text-base lg:text-[22px] bg-transparent"
            required
          />{" "}
          <button
            type="submit"
            className="w-[120px] sm:w-[150px] lg:w-[210px] h-full rounded-full bg-black text-white text-sm sm:text-base cursor-pointer shrink-0"
          >
            {" "}
            Subscribe{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default Newsletter;
