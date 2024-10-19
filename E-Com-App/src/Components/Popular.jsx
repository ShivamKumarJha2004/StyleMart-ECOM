import {React,useState,useEffect} from 'react';

import Items from './Items';

const Popular = ({ isDarkMode }) => {
  const [womenpopular,setwomenpopular]=useState([]);

  useEffect(async()=>{
  await fetch('https://stylemart-ecom-backend.onrender.com/api/popularInwomen')
  .then((res)=>res.json()).then((data)=>setwomenpopular(data))
  },[])
  
  return (
    <div className="p-6">
 <h2
  className={`text-4xl font-bold text-center mb-8 tracking-wide uppercase ${
    isDarkMode ? 'text-pink-400' : 'text-purple-700'
  }`}
>
  Popular in Women
</h2>

      <hr className={`mb-6 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenpopular.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
