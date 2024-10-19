import React, { useEffect, useState } from 'react';

import Items from './Items'; // Assuming you have an Items component

const NewCollection = ({ isDarkMode }) => {
const [newcoll,setnewcoll]=useState([]);

useEffect(async()=>{
await fetch('https://stylemart-ecom-backend.onrender.com/api/newcollection')
.then((res)=>res.json()).then((data)=>setnewcoll(data))
},[])

  return (
    <div className="p-4"> {/* Padding for some space around the container */}
      <h1 className={`text-4xl font-bold mt-16 text-center ${isDarkMode ?'text-amber-500':'text-gray-900'}`}>NEW COLLECTION</h1> {/* Centered and styled heading */}
      <hr className="mt-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Grid container */}
        {
          newcoll.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              isDarkMode={isDarkMode}
            />
          ))
        }
      </div>
    </div>
  );
}

export default NewCollection;
