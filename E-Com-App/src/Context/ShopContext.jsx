import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const DefaultcartValue = (products) => {
    let cart = {};
    products.forEach((product) => {
        cart[product.id] = 0; // Initialize cart with product IDs
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_products, setAllProducts] = useState([]);
    const [cartvalue, setcartvalue] = useState({});
    const [loading, setLoading] = useState(true);  // Add loading state
    const [error, setError] = useState(null);  // Add error state

    const fetchData = async () => {
        try {
            // Fetch all products
            const response = await fetch('https://stylemart-ecom-backend.onrender.com/api/allproduct');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAllProducts(data);
            setcartvalue(DefaultcartValue(data)); // Initialize cart after products are fetched
        } catch (error) {
            console.error('Error fetching products:', error);
            setError("Failed to load products");
        } finally {
            setLoading(false);
        }
    
        // Check if 'auth-token' exists in localStorage
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            try {
                const cartResponse = await fetch('https://stylemart-ecom-backend.onrender.com/getcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',  // Expecting JSON response
                        'auth-token': authToken,
                        'Content-Type': 'application/json', // Only include if you're sending JSON data
                    },
                });
                if (!cartResponse.ok) {
                    throw new Error('Cart fetch failed');
                }
                const cartData = await cartResponse.json();
                setcartvalue(cartData);  // Set cart values after fetching cart data
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
       const addTocart = async (itemid) => {
        // Update cart value in the frontend state
        setcartvalue((prev) => ({
          ...prev,
          [itemid]: (prev[itemid] || 0) + 1, // Initialize with 0 if undefined
        }));
      
        // Check if the user is authenticated by looking for the auth token
        if (localStorage.getItem('auth-token')) 
            console.log(localStorage.getItem('auth-token'));
            
            {
          try {
            const response = await fetch('https://stylemart-ecom-backend.onrender.com/addtocart', {
              method: 'POST',
              headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ itemid: itemid }),
            }).then((res)=>res.json()).then((data)=>console.log(data))
      
            
            
          } catch (error) {
            console.error('Error adding to cart:', error);
          }
        }
      };
      
    const removeFromcart = async(itemid) => {
        setcartvalue((prev) => ({
            ...prev,
            [itemid]: prev[itemid] > 0 ? prev[itemid] - 1 : 0
        }));
        if(localStorage.getItem('auth-token'))
        {
             await fetch('https://stylemart-ecom-backend.onrender.com/removeproduct', {
                method: 'POST',
                headers: {
                  Accept: 'application/form-data',
                  'auth-token': `${localStorage.getItem('auth-token')}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemid: itemid }),
              }).then((res)=>res.json()).then((data)=>console.log(data))
        
              
              
             
                
        }
    };

    const getTotalCartItems = () => {
        return Object.values(cartvalue).reduce((total, count) => total + count, 0);
    };

    const contextValue = {
        all_products,
        cartvalue,
        addTocart,
        removeFromcart,
        getTotalCartItems
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
