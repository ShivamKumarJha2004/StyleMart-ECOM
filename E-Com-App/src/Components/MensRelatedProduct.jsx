import React, { useState, useEffect } from 'react';
import Item from './Items.jsx';

const MensRelatedProduct = ({ category }) => {  // Accept 'category' as a prop
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        // Append the category as a query parameter
        const response = await fetch(`https://stylemart-ecom-backend.onrender.com/api/relatedProduct?category=${category}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setRelatedProducts(data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, [category]);  // Re-fetch when the category changes

  return (
    <div className='relative md:top-[15rem] bottom-[25rem] md:right-0'>
      <h1 className="text-2xl font-bold mb-4 text-center">Related Products - {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <hr className="mb-4 w-[210px] h-[6px] rounded-md bg-slate-700 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative md:left-0 left-5">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          ))
        ) : (
          <p>No related products found for {category}.</p>
        )}
      </div>
    </div>
  );
};

export default MensRelatedProduct;
