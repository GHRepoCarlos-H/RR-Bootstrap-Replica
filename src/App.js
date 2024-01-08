// App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import LocationForm from './components/CardGrid';
import StoreListings from './components/StoreListings';
import CardGrid from './components/CardGrid';


const App = () => {
  return (
    <div>
      <CustomNavbar />
      <StoreListings />
      <LocationForm />
      
      
      {/* Add more components as needed */}
    </div>
  );
};

export default App;

