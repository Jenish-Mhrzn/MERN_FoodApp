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
import Addproducts from "../pages/AdminPages/Addproducts";
import AdminLayout from "../components/AdminComponents/AdminLayout";
import ProductsList from "../pages/AdminPages/ProductsList";
import Subscribe from "../pages/AdminPages/Subscribe";

const Approutes = () => {
  return (
    <div>
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
      <div className="bg- white">
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Addproducts />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="subscribe" element={<Subscribe />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Approutes;
