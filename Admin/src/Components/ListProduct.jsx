import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate between routes

  const fetchData = async () => {
    await fetch('http://localhost:4000/api/allproduct')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveProduct = async (productId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    
    if (isConfirmed) {
      await fetch('http://localhost:4000/api/deleteproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }),
      });
      await fetchData(); // Refresh the product list after deletion
    }
  };
  
  return (
    <div className="p-8 max-w-6xl mx-auto relative bottom-[5rem] md:bottom-[2rem]">

      <h1 className="text-3xl font-bold text-center mb-8">All Products List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <p className="text-sm text-gray-600">
                Old Price: <span className="line-through">₹{product.old_price}</span>
              </p>
              <p className="text-lg text-green-600 font-bold">New Price: ₹{product.new_price}</p>
            </div>
            <div className="p-4 flex justify-end">
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveProduct(product.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
