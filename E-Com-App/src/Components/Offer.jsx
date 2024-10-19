import React from 'react';
import exclusiveimg from "./Assets/exclusiveOffer.png";

const OfferPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-10 lg:p-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white  md:w-[50rem] md:relative md:left-[20rem] rounded-lg md:h-[30rem]">
      <div className="flex-1 max-w-md text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Exclusive
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Best Offer for You! <br />
          Offer on Best Selling Products
        </p>
        <button className="px-6 py-3 text-base md:text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
          Check Now
        </button>
      </div>
      <div className="flex-1 max-w-md">
        <img
          src={exclusiveimg}
          alt="Offer Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default OfferPage;
