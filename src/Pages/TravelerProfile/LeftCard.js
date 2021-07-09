import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import FeatureCard from "../../Components/Cards/FeatureCard";
import GridCard from "../../Components/Cards/GridCard";

const LeftCard = () => {
  // import grid images
  const {
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
    connect7,
    connect8,
    connect9,
    connect10,
    connect11,
    connect12,
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
  } = Images;

  //   pass them as props
  const firstGridImages = [
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
  ];
  const SecondGridImages = [
    connect7,
    connect8,
    connect9,
    connect10,
    connect11,
    connect12,
  ];
  const ThirdGridImages = [
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
  ];
  return (
    <>
      <LeftCardStyles>
        <FeatureCard />
        <GridCard
          title="Travel Connections"
          smallText="See All"
          images={firstGridImages}
        />
        <GridCard
          title="Travel Wishlist"
          smallText="See All"
          images={SecondGridImages}
        />
        <GridCard
          title="Group Tours"
          smallText="See All"
          images={ThirdGridImages}
        />
      </LeftCardStyles>
    </>
  );
};

export default LeftCard;
const LeftCardStyles = styled.div`
  width: 49%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
