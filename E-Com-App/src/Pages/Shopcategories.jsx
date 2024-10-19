import {React,useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import Items from '../Components/Items';

const Shopcategories = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <>
      {/* Banner Section */}
      <div className="flex justify-center items-center w-full relative top-[15rem] md:top-[6rem]">
        <img
          className="w-full h-auto object-cover max-w-full md:max-w-[87rem]" // Full width on mobile and max-width on large screens
          src={props.banner}
          alt="Shop Banner"
        />
      </div>
      <div className='relative md:bottom-[12rem]'>

      {/* Product Count and Sort Section */}
      <div className='relative top-[17rem]  p-4 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-start'>
        <p className="mb-4 md:mb-0">
          <span className='font-bold'>Showing 1-12</span> out of 30 products
        </p>
        <div>
          Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className='relative top-[15rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4'>
        {all_products.map((items, i) => {
          if (props.categories === items.category) {
            return (
              <Items
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      </div>
    </>
  );
};

export default Shopcategories;
