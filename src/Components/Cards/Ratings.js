import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

const Ratings = () => {
  return (
    <>
      <RatingsStyles>
        <div className="wrap">
          <div className="stars">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </div>
          <p>4.2</p>
          <p>(49 Reviews)</p>
        </div>
      </RatingsStyles>
    </>
  );
};

export default Ratings;
const RatingsStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #163c5a;

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }

  .stars {
    svg {
      font-size: 1.3rem;
      margin-right: 0.4rem;
    }
  }

  p {
    margin: 0;
  }
`;
