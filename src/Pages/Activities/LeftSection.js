import React from "react";
import styled from "styled-components";
import FeatureCard from "../../Components/Cards/FeatureCard";

const LeftSection = () => {
  return (
    <>
      <LeftSectionStyles>
        <FeatureCard noSub />
      </LeftSectionStyles>
    </>
  );
};

export default LeftSection;
const LeftSectionStyles = styled.div`
  width: 24.5%;
`;
