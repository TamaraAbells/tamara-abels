import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import TopNav from "../../Components/Navs/TopNav/TopNav";
import ActivitiesBody from "./ActivitiesBody";

const Activities = () => {
  return (
    <>
      <ActivitiesStyles>
        <TopNav />
        <ActivitiesBody />
        <Footer />
      </ActivitiesStyles>
    </>
  );
};

export default Activities;
const ActivitiesStyles = styled.div``;
