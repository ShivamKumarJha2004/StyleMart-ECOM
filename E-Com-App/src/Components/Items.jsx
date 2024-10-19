import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ id, name, image, new_price, old_price, isDarkMode }) => {
  // Fallback image in case of error
  const handleImageError = (e) => {
    e.target.src = '/path-to-placeholder-image.jpg'; // Replace with your placeholder image path
  };

  return (
    <div
      className={`rounded-lg shadow-md p-4 m-4 w-full max-w-xs transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative right-[2rem] md:right-0 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Image container */}
      <div className="h-80 overflow-hidden rounded-lg">
        <Link to={`/product/${id}`} aria-label={`View details of ${name}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
            loading="lazy" // Lazy load the image
            onError={handleImageError}
            onClick={window.scrollTo(0,0)}
          />
        </Link>
      </div>

      {/* Product details */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-pink-500">₹{new_price}</span>
          <span
            className={`text-xs line-through ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            ₹{old_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Items;
