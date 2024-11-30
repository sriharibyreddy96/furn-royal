import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SofaImage from "../../../assets/Royal_Furn_Sofas/Single_Sofa_3.jpg";
import ChairsImage from "../../../assets/Royal_Furn_Tables/Small_Table_4.jpg";
import BedImage from "../../../assets/category_imgs/bed1.jpg";

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 150px;
  justify-content: center;

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
  height: auto; /* Fixed height for uniform image sizing */
  object-fit: contain; /* Ensure the whole image is displayed without cropping */
  border-radius: 8px;
`;

const CategoryName = styled.p`
  // margin-top: 15px; /* Adds space between image and text */
  font-weight: 800;
  font-size: 1.3rem;
  color: #333; /* Text color */
  margin-top: 20px;
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
