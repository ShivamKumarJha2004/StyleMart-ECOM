import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import upload from "../assets/uploadImage.png";

const AddProduct = () => {
  const navigate = useNavigate(); 
  const [image, setImage] = useState(null); 
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]); 
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responsedata;
    let product = productDetails;
    let formdata = new FormData();
    
    formdata.append('product', image); 

    try {
        const response = await fetch("http://localhost:4000/upload", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formdata,
        });

        responsedata = await response.json();

        if (responsedata.success) {
            product.image = responsedata.image_url; 

            await fetch ('http://localhost:4000/api/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((res)=>res.json()).then((data)=>{
               data.success ? alert("Product Added") : alert("Failed")
            });
        }
    } catch (error) {
        console.error('Error uploading the product image:', error);
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 flex items-center justify-center">
      <div className="bg-white shadow-lg w-full max-w-[40rem] p-8 rounded-lg relative m-auto">
        {/* Back Button for Mobile View */}
       
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Add New Product</h2>

        {/* Product Title */}
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium mb-2">Product Title</label>
          <input 
            name="name" 
            value={productDetails.name} 
            onChange={changeHandler}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200" 
            placeholder="Enter product title"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium mb-2">Product Description</label>
          <textarea 
            name="description" 
            value={productDetails.description} 
            onChange={changeHandler}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200" 
            placeholder="Describe the product"
            rows={4}
          />
        </div>

        {/* Price and Offer Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Price</label>
            <input 
              name="old_price" 
              value={productDetails.old_price} 
              onChange={changeHandler}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200" 
              placeholder="Enter price"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Offer Price</label>
            <input 
              name="new_price" 
              value={productDetails.new_price} 
              onChange={changeHandler}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200" 
              placeholder="Enter offer price"
            />
          </div>
        </div>

        {/* Product Category */}
        <div className="flex flex-col mb-6">
          <label className="text-lg font-medium mb-2">Product Category</label>
          <select 
            name="category" 
            value={productDetails.category} 
            onChange={changeHandler}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <option value="">Select Category</option>
            <option value="men">MEN</option>
            <option value="women">WOMEN</option>
            <option value="kid">KID</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <label htmlFor="file-input" className="cursor-pointer">
            <img 
              className="w-[10rem] h-[10rem] object-cover rounded-lg border border-gray-300" 
              src={image ? URL.createObjectURL(image) : upload} 
              alt="Upload"
            />
          </label>
          <input 
            id="file-input" 
            type="file" 
            name="image" 
            onChange={imageHandler}
            hidden 
          />
          <p className="text-gray-500 text-sm mt-2">Click the image to upload</p>
        </div>

        {/* Submit Button */}
        <button
          onClick={addProduct}
          type="button" 
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
        >
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
