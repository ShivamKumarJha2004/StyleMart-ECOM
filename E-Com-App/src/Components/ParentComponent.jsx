import React, { useState } from 'react';
import RelatedProduct from './MensRelatedProduct';

const ParentComponent = () => {
  const [category, setCategory] = useState('men'); // Default to 'men'

  return (
    <div className="p-8">
      <nav className="mb-8">
        <button
          className={`px-4 py-2 mr-2 rounded ${category === 'men' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setCategory('men')}
        >
          Men
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded ${category === 'women' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setCategory('women')}
        >
          Women
        </button>
        <button
          className={`px-4 py-2 rounded ${category === 'kids' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={() => setCategory('kid')}
        >
          Kids
        </button>
      </nav>

      {/* Pass the selected category as a prop */}
      <RelatedProduct category={category} />
    </div>
  );
};

export default ParentComponent;
