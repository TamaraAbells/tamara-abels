import React from "react";
import styled from "styled-components";
import Intro from "../../Components/Intro/Intro";
import {
  FifthGallery,
  FirstGallery,
  FourthGallery,
  SecondGallery,
  ThirdGallery,
} from "./Galleries";
import HYG from "./HYG";

const Body = () => {
  return (
    <>
      <BodyStyles>
        <HYG />
        <div className="space-4">
          <Intro
            title="THINGS TO DO"
            text="Doing what you like is freedom, liking what you do is happiness."
            color={"#213F5C"}
          />
        </div>
        <FirstGallery />
        <div className="space-5">
          <Intro
            title="PLACES TO STAY"
            text="At the end of the day your feet should be dirty, your hair messy and your eyes sparkling."
            color={"#285AAE"}
          />
        </div>
        <SecondGallery />
        <div className="space-5">
          <Intro
            title="PEOPLE TO MEET"
            text="Remember that happiness is a way of travel, not a destination."
            color={"#F58642"}
          />
        </div>
        <ThirdGallery />
        <div className="space-5">
          <Intro
            title="PLACES TO VISIT"
            text="We have nothing to lose and a world to see."
            color={"#FEE05F"}
          />
        </div>
        <FourthGallery />
        <div className="space-5">
          <Intro
            title="STUFF TO EXPLORE"
            text="Once a year, go someplace you’ve never been before."
            color={"#0693A0"}
          />
        </div>
        <FifthGallery />
      </BodyStyles>
    </>
  );
};

export default Body;
const BodyStyles = styled.div`
  width: 100%;
  position: relative;

  .space-4 {
    padding-top: 8rem;
  }

  .space-5 {
    padding-top: 12rem;
  }
`;
