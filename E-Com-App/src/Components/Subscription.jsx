import React, { useState } from 'react';

const Subscription = ({ isDarkMode }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here, e.g., send email to server
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <div
      className={`p-10 rounded-lg shadow-lg text-center mx-auto my-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'}`}
      style={{ maxWidth: '600px' }} // Optional: Set max width for better alignment
    >
      <h2 className="text-3xl font-bold mb-4">Get Exclusive Offers</h2>
      <p className="text-lg mb-6">Subscribe to our newsletter to receive exclusive offers directly in your email.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`p-3 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-64 rounded-lg border ${isDarkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-300 bg-white text-black'} focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-300'}`}
          required
        />
        <button
          type="submit"
          className={`font-semibold py-3 px-6 rounded-lg transition duration-300 ${isDarkMode ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-yellow-500 hover:bg-yellow-600 text-black'}`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscription;
