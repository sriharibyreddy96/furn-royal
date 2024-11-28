import React, { useEffect } from "react";
import "./styles.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Contactpage from "./pages/Contactpage";
import AllProducts from "./pages/AllProducts";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/furn-royal" element={<Homepage />} />
        <Route path="/category/:category" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        <Route path="/furn-royal/contact" element={<Contactpage />} />
        <Route path="/furn-royal/product" element={<AllProducts />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
