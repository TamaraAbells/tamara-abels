import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";

const Stats = () => {
  return (
    <>
      <StatsStyles>
        <div>
          <h4>325</h4>
          <h5>Traveled Destinations</h5>
        </div>
        <div>
          <h4>8</h4>
          <h5>Country Visits</h5>
        </div>
        <div>
          <h4>125</h4>
          <h5>Tour Guides</h5>
        </div>
      </StatsStyles>
    </>
  );
};

export default Stats;
const StatsStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url(${Images.statsBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div {
    text-align: center;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    h4 {
      font-size: 1.4rem;
      font-weight: bold;
    }

    h5 {
      font-size: 1rem;
      font-weight: bold;
    }

    &:nth-child(1) {
      color: #2c66b8;
    }

    &:nth-child(2) {
      color: #ffd20b;
    }

    &:nth-child(3) {
      color: #f58642;
    }
  }
`;
