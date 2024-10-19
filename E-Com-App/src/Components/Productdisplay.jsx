import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import RelatedProduct from './MensRelatedProduct';
 // Import RelatedProduct component

const Productdisplay = (props) => {
  const { product } = props;

  // State to manage selected size
  const [selectedSize, setSelectedSize] = useState('');
  const { addTocart } = useContext(ShopContext);

  // Check if product data is available
  if (!product) {
    return <div>Loading...</div>; // Show a loading state if product is not yet available
  }

  // Handler for size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  console.log(product.id);

  return (
    <div>
      {/* Product Display Section */}
      <div className='flex md:ml-28 ml-0 relative top-5 flex-col md:flex-row'>
        {/* Left column with multiple images */}
        <div className='flex flex-col space-y-6 -ml-5'>
          <div className='md:h-28 md:w-32 h-28 w-24'>
            <img src={product.image} alt="Product" className="object-cover h-full w-full rounded-md" />
          </div>
          <div className='md:h-28 md:w-32 h-28 w-24'>
            <img src={product.image} alt="Product" className="object-cover h-full w-full rounded-md" />
          </div>
          <div className='md:h-28 md:w-32 h-28 w-24'>
            <img src={product.image} alt="Product" className="object-cover h-full w-full rounded-md" />
          </div>
          <div className='md:h-28 md:w-32 h-28 w-24'>
            <img src={product.image} alt="Product" className="object-cover h-full w-full rounded-md" />
          </div>
        </div>

        {/* Right column with main image and product details */}
        <div className='flex ml-8 md:ml-0 relative flex-grow md:bottom-0 bottom-[32.4rem] left-12 flex-col md:flex-row'>
          {/* Main Image */}
          <div className='md:h-[32rem] md:w-[26rem] flex-shrink-0 h-[32rem] w-64'>
            <img src={product.image} alt="Main Product" className="object-cover h-full w-full rounded-md" />
          </div>

          {/* Product Details */}
          <div className='flex flex-col justify-start ml-6 flex-grow h-[32rem] overflow-y-auto relative top-14 md-top-0 right-[7rem] md:right-0 w-[21rem]'>
            <h1 className='text-xl md:text-2xl font-semibold md:w-[30rem] w-[21rem]'>
              {product.name}
            </h1>

            {/* Prices */}
            <div className='flex items-center space-x-4 text-2xl mt-2'>
              <div className='line-through text-slate-500 font-semibold'>
                <span>₹</span>{product.old_price}
              </div>
              <div className='font-bold text-black'>
                <span>₹</span>{product.new_price}
              </div>
            </div>

            {/* Product Description */}
            <div className='mt-4 text-sm text-gray-700'>
              <h2 className='text-lg font-semibold'>Description:</h2>
              <p>{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className='mt-4'>
              <h2 className='text-lg font-semibold'>Select Size:</h2>
              <div className='flex space-x-2 mt-2'>
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className={`py-1 px-3 border rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className='mt-6'>
              <button className='py-2 px-4 bg-rose-500 text-white font-semibold rounded-md' onClick={() => addTocart(product.id)}>
                Add to Cart
              </button>
            </div>

            {/* Category Section */}
            <div className='mt-4'>
              <h2 className='text-lg font-semibold'>Category:</h2>
              <p className='text-sm text-gray-700'>Clothing</p>
            </div>

            {/* Tags Section */}
            <div className='mt-2'>
              <h2 className='text-lg font-semibold'>Tags:</h2>
              <p className='text-sm text-gray-700'>
                Modern, Latest, Bestseller
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className='mt-12'>
        {/* Pass the appropriate category to fetch related products */}
        <RelatedProduct category={product.category} />
      </div>
    </div>
  );
};

export default Productdisplay;
