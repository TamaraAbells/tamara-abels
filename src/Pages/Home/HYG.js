import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";

const HYG = () => {
  const { globe, star, heart } = Images;
  return (
    <>
      <HYGStyles>
        <div className="svg">
          <img src={globe} alt="globe" />
        </div>
        <div className="svg">
          <img src={heart} alt="heart" />
        </div>
        <div className="svg">
          <img src={star} alt="star" />
        </div>
      </HYGStyles>
    </>
  );
};

export default HYG;
const HYGStyles = styled.div`
  width: 50%;
  position: absolute;
  top: -50px;
  left: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    position: static;
    width: 90%;
    margin: auto;
  }

  .svg {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 70px;
    }

    @media screen and (max-width: 800px) {
      width: 30%;
      height: 120px;

      img {
        width: 50px;
      }
    }
  }
`;
