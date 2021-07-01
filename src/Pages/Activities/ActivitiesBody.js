import React from "react";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import MidSection from "./MidSection";
import RightSection from "./RightSection";

const ActivitiesBody = () => {
  return (
    <>
      <ActivitiesBodyStyles>
        <LeftSection />
        <MidSection />
        <RightSection />
      </ActivitiesBodyStyles>
    </>
  );
};

export default ActivitiesBody;
const ActivitiesBodyStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
