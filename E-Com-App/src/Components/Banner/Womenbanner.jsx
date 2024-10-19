import React from 'react';
import womenBanner from '../Assets/girll.png'; // Image for women
import kidBanner from '../Assets/kidBanner.png';
const Womenbanner = () => {
  return (
    <div id='womenbanner'>
      <div className="flex flex-col md:flex-row w-full h-auto md:h-44 bg-gradient-to-r from-pink-100 via-pink-100 to-pink-200 text-black relative md:top-32 top-[18rem] p-6 md:p-10">
        <div id="left" className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl text-orange-500 font-semibold mb-4">
            FLAT 50% OFF FOR KID
               <span className='text-[2rem] relative bottom-2 left-5'><button className="bg-slate-800 text-white p-2.5 rounded-md transform transition-transform duration-100 active:scale-95">
            Explore Now</button>
            </span>

          </h1>

        </div>

        <div id="right" className="md:w-1/2 flex justify-center md:justify-end relative md:bottom-10 md:right-48">
          <img src={kidBanner} alt="Women's Banner" className="w-full md:w-[15rem]  md:h-[14.6rem] object-contain relative bottom-14" />
        </div>
      </div>
    </div>
  );
};

export default Womenbanner;
