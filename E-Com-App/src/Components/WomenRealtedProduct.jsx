import React, { useState, useEffect } from 'react';
import Item from './Items.jsx';

const RelatedProduct = ({ category }) => {  // Accept category prop
  const [relatedProducts, setRelatedProducts] = useState([]); // State to store related products

  // Fetch related products when the component mounts or when the category changes
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('https://stylemart-ecom-backend.onrender.com/api/relatedProduct', {
          method: 'POST', // Ensure POST since you're sending the category
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category }), // Send category dynamically
        });
        const data = await response.json();
        setRelatedProducts(data); // Update the state with the fetched products
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, [category]); // Refetch products when category changes

  return (
    <div className='relative md:top-[15rem] top-0'>
      <h1 className="text-2xl font-bold mb-4 text-center">Related Products</h1>
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
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
