import React from 'react';
import HomePage from '../Components/Homepage';
import Popular from '../Components/Popular';
import OfferPage from '../Components/Offer';
import NewCollection from '../Components/NewCollection';
import Subscription from '../Components/Subscription';
import Footer from '../Components/Footer';

const Shop = ({ isDarkMode }) => {
  return (
    <div>
      <HomePage isDarkMode={isDarkMode} />
      <Popular isDarkMode={isDarkMode} />
     <OfferPage/>
     <NewCollection  isDarkMode={isDarkMode}/>
     <Subscription isDarkMode={isDarkMode}/>
     <Footer/>
    </div>
  );
};

export default Shop;
