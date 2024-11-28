import React from "react";
import styled from "styled-components";
import products from "../data/Products";
import ProductCard from "../components/products/product/ProductCard";
import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/HomePage/footer/Footer";


// Styled component for grid layout
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 50px 100px;
  background-color: #e8e8e8;

  @media (max-width: 600px) {
    padding: 50px;
  }
`;

const Heading = styled.h1`
  font-size: 35px;
  // margin-bottom: 10px;
  padding: 30px 0px 10px 0px;
  color: black;
  text-align: center;
  background-color: #e8e8e8;
`;

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <Heading>All Products</Heading>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <Footer />
    </>
  );
};

export default AllProducts;
