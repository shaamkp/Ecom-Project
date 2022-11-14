import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../general/LandingPage';
import Header from '../../includes/Header';
import AboutUs from '../../screens/AboutUs';
import ContactUs from '../../screens/ContactUs';
import ProductsPage from '../../screens/ProductsPage';

function AppRouter() {
    console.log("in App Router");
  return (
      <div>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
              </Route>
          </Routes>
      </div>
  );
}

export default AppRouter
