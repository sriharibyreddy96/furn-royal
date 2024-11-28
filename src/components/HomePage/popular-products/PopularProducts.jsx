import React from "react";
import styled from "styled-components";
import products from "../../../data/Products";
import ProductCard from "../../products/product/ProductCard";

// Styled component for grid layout
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 50px 100px;
  // margin: 50px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8) ;
  background-color: #e8e8e8;

  @media (max-width: 600px) {
  padding: 50px;
  }

`;

const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`;

const PopularProducts = () => {
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Shuffle the products and pick a random number between 5 and 10
  //   const randomProducts = shuffleArray(products).slice(0, Math.floor(Math.random() * (10 - 5 + 1)) + 5);

  // Display 8 products only
  const randomProducts = shuffleArray(products).slice(0, 8);

  return (
    <>
      <Heading>Popular Products</Heading>
      <ProductGrid>
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </>
  );
};

export default PopularProducts;
