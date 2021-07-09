import React from "react";
import styled from "styled-components";
import EventsCard from "../../Components/Cards/EventsCard";

const RightSection = () => {
  return (
    <>
      <RightSectionStyles>
        <EventsCard cardWidth="100%" cardDisplay="block" />
      </RightSectionStyles>
    </>
  );
};

export default RightSection;
const RightSectionStyles = styled.div`
  width: 24.5%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
