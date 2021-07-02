import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import Body from "./Body";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <HomeStyles>
        <Hero />
        <Body />
        <Footer />
      </HomeStyles>
    </>
  );
};

export default Home;

const HomeStyles = styled.div`
  width: 100%;
  overflow: hidden;
`;
