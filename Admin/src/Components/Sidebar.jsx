import React from 'react';
import addproduct from "../assets/img1.png";
import productlist from "../assets/img2.jpeg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-28 mt-44 md:mt-0 ml-[3rem] md:ml-0">
        {/* Sidebar Item: Add Product */}
        <Link to="/addproduct">
          <div className='flex mt-28 ml-5 md:ml-10 bg-[#F2F3FF] p-2 sm:p-3 w-44 md:w-56 rounded-md cursor-pointer'>
            <div>
              <img className='w-12 md:w-14' src={addproduct} alt='Add Product' />
            </div>
            <div>
              <h4 className='relative top-3 md:top-5 left-3 text-indigo-500 font-semibold text-sm md:text-base'>Add Product</h4>
            </div>
          </div>
        </Link>

        {/* Sidebar Item: Product List */}
        <Link to="/listproductt">
          <div className='flex mt-5 ml-5 md:ml-10 bg-[#F2F3FF] p-2 sm:p-3 w-44 md:w-56 rounded-md cursor-pointer'>
            <div>
              <img className='w-12 md:w-14' src={productlist} alt='Product List' />
            </div>
            <div>
              <h4 className='relative top-3 md:top-5 left-3 text-indigo-500 font-semibold text-sm md:text-base'>Product List</h4>
            </div>
          </div>
        </Link>

        {/* Gradient Divider */}
        <div className='hidden md:block w-[3px] bg-gradient-to-r from-pink-400 to-yellow-400 h-[10rem] md:h-[15rem] relative left-[10rem] md:left-[18rem] bottom-[8rem] md:bottom-[12rem]'></div>
      </div>
    </>
  );
};

export default Sidebar;
