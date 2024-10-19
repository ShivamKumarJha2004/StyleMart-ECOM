import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const CartItem = () => {
  const { all_products, cartvalue, removeFromcart, addTocart } = useContext(ShopContext);

  const decreaseQuantity = (itemId) => {
    if (cartvalue[itemId] > 0) {
      removeFromcart(itemId);
    }
  };

  const calculateSubtotal = () => {
    return all_products.reduce((acc, item) => {
      if (cartvalue[item.id] > 0) {
        return acc + item.new_price * cartvalue[item.id];
      }
      return acc;
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-6 ">
      {/* Table header */}
      <div className="grid grid-cols-6 text-center font-semibold text-lg border-b pb-4">
        <p className="col-span-1">Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="my-4" />

      {/* Cart Items */}
      {all_products.map((item) => {
        if (cartvalue[item.id] > 0) {
          return (
            <div key={item.id} className="grid grid-cols-6 text-center items-center border-b py-10 md:py-4 relative md:right-0 right-12 ">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="h-20 w-20 object-cover col-span-1 ml-14" />
              
              {/* Product Title */}
              <p className="md:col-span-1 font-medium md:w-full w-[17rem] relative md:left-0 left-12">{item.name}</p>

              {/* Product Price */}
              <p className="text-rose-500 font-semibold relative md:top-0 top-[3.8rem] right-14 md:right-0">₹{item.new_price}</p>

              {/* Product Quantity with plus and minus icons */}
              <div className="flex items-center justify-center relative md:top-0 top-[3.8rem]  md:left-0">
                <button 
                  className="px-2 py-1 border rounded-l-md bg-gray-100 text-black font-semibold" 
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="px-3 py-1 border-t border-b bg-white text-black font-semibold ">
                  {cartvalue[item.id]}
                </span>
                <button 
                  className="px-2 py-1 border rounded-r-md bg-gray-100 text-black font-semibold" 
                  onClick={() => addTocart(item.id)}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <p className="text-black font-semibold relative md:top-0 top-[3.8rem] left-10 md:left-0">₹{item.new_price * cartvalue[item.id]}</p>

              {/* Remove Icon */}
              <i 
                className="fas fa-times text-red-500 cursor-pointer relative md:top-0 top-[3.8rem] left-10 md:left-0 text-2xl" 
                onClick={() => { removeFromcart(item.id); }}
              ></i>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Cart Totals</h2>

        <div className="flex justify-between mb-3">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-black font-semibold">₹{calculateSubtotal()}</p>
        </div>
        <hr className="my-2"/>

        <div className="flex justify-between mb-3">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="text-black font-semibold">Free</p>
        </div>
        <hr className="my-2"/>

        <div className="flex justify-between font-semibold text-lg">
          <p className="text-gray-700">Total</p>
          <p className="text-black">₹{calculateSubtotal()}</p>
        </div>

        <button 
          className="w-full bg-rose-500 text-white font-bold py-3 rounded-md mt-6 hover:bg-rose-600 transition duration-300"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartItem;
    