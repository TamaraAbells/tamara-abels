import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import FeatureCard from "../../Components/Cards/FeatureCard";
import GridCard from "../../Components/Cards/GridCard";
import Spaces from "../../Components/Cards/Spaces";

const LeftCard = () => {
  // import grid images
  const {
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
    space1,
    space2,
    space3,
    space4,
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

  const ThirdGridImages = [
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
  ];

  const spaces1 = [
    {
      title: "Nest by Pool",
      imgUrl: space1,
      location: "Las Vegas, USA",
      bedrooms: "1",
      bathrooms: "2",
      price: "36",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
    {
      title: "House on Mount",
      imgUrl: space2,
      location: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
  ];

  return (
    <>
      <LeftCardStyles>
        <GridCard
          title="Group Tours"
          smallText="See All"
          images={ThirdGridImages}
        />
        <GridCard
          title="Travel Connections"
          smallText="See All"
          images={firstGridImages}
        />
        <FeatureCard cta noSub title="Skill/Knowledge Share Service" />
        <Spaces heading="Stay Spaces" allData={spaces1} />
      </LeftCardStyles>
    </>
  );
};

export default LeftCard;
const LeftCardStyles = styled.div`
  width: 49%;
`;
