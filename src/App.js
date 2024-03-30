import './App.css';
import React from 'react'
import Cart from './components/Cart';
import About from './components/About';
import Navbar from './components/Navbar';
import { AppProvider } from './AppContext';
import { Routes, Route } from "react-router-dom";
import MenProduct from './components/men/MenProduct';
import WomenProduct from './components/women/WomenProduct';
import MenProductDetail from './components/men/MenProductDetail';
import WomenProductDetails from './components/women/WomenProductDetails';
import Contact from './components/Contact';


function App() {
  return (
    <div className='p-4'>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<MenProduct />} />
          <Route path="/productWomen" element={<WomenProduct />} />
          <Route path="/productMens/:id" element={<MenProductDetail />} />
          <Route path='/productWomens/:id' element={<WomenProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
