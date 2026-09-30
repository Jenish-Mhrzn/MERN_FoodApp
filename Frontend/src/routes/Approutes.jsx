import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/Cart";
import ScrollToTop from "../components/ScrollToTop";
import Newsletter from "../components/Newsletter";

const Approutes = () => {
  return (
    <div className="md:px-5 lg:px-10">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <HeadlineCards />
              <Food />
              <Category />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Approutes;
