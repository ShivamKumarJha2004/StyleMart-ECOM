import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Shopcategories from './Pages/Shopcategories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Menbanner from './Components/Assets/menBanner.png';
import Womenbanner from './Components/Assets/womenBanner.png';
import kidBanner from './Components/Assets/kidBanner.png';
import HomePage from './Components/Homepage'; // Import HomePage

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Shop isDarkMode={isDarkMode} />} />
        <Route path="/mens" element={<Shopcategories banner={Menbanner} categories="men" />} />
        <Route path="/womens" element={<Shopcategories banner={Womenbanner} categories="women" />} />
        <Route path="/kids" element={<Shopcategories banner={kidBanner} categories="kid" />} />
        
        {/* Corrected Product Route with productId dynamic parameter */}
        <Route path="/product/:productId" element={<Product />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
