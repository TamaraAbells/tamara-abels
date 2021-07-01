import React from "react";
import styled from "styled-components";
import FeatureCard from "../../Components/Cards/FeatureCard";

const LeftSection = () => {
  return (
    <>
      <LeftSectionStyles>
        <FeatureCard />
      </LeftSectionStyles>
    </>
  );
};

export default LeftSection;
const LeftSectionStyles = styled.div``;
