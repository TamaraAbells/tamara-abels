import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import BlogPost from "../../Components/Cards/BlogPost";
import EventsCard from "../../Components/Cards/EventsCard";
import GridCard from "../../Components/Cards/GridCard";
import Ratings from "../../Components/Cards/Ratings";
import ThoughtsCard from "../../Components/Cards/ToughtsCard";

const RightCard = () => {
  // import grid images
  const { past1, past2, past3 } = Images;

  // pass them as props to grid component

  const gridImages = [past1, past2, past3];
  const gridText = ["Switzerland", "Greenland", "Canada"];

  return (
    <>
      <RightCardStyles>
        <GridCard
          title="Past Travels"
          smallText="See More"
          images={gridImages}
          hoverEffect={gridText}
        />
        <Ratings />
        <EventsCard />
        <ThoughtsCard />
        <BlogPost />
      </RightCardStyles>
    </>
  );
};

export default RightCard;
const RightCardStyles = styled.div`
  width: 49%;
`;
