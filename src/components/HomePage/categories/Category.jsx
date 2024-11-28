import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SofaImage from "../../../assets/category_sofa.png";
import ChairsImage from "../../../assets/category_table.png";
import BedImage from "../../../assets/category_bed.png";

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 150px;
  justify-content: center;
  // margin-left: 50px;
  // margin-right: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 550px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const CategoryHeading = styled.h1`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 2.5rem;
  margin-right: 40px;
  text-align: center;

  @media (max-width: 1000px) {
    writing-mode: unset;
    transform: unset;
    font-size: 2.5rem;
    margin-right: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 550px) {
    margin-bottom: 15px;
    font-size: 2rem;
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
`;

const CategoryItem = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  cursor: pointer;
  width: 26%;
  margin-bottom: 30px;
  background-color: #ecffdc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Light shadow for card */
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    transform: translateY(-10px); /* Lift the card when hovered */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  @media (max-width: 1000px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 95%;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const CategoryName = styled.p`
  margin-top: 20px;
  font-weight: 800;
  font-size: 1.3rem;
  color: #333; /* Text color */
`;

const Category = () => {
  const categoryImages = {
    sofa: SofaImage,
    dining: ChairsImage,
    bed: BedImage,
  };

  return (
    <CategoryContainer>
      <CategoryHeading>Categories</CategoryHeading>
      <CategoryList>
        {["Bed", "Sofa", "Dining"].map((category) => (
          <CategoryItem
            to={`/category/${category.toLowerCase()}`}
            key={category}
          >
            <CategoryImage
              src={categoryImages[category.toLowerCase()]}
              alt={category}
            />
            <CategoryName>{category}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
