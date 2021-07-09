import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import Images from "../../Assets/Images/images";

const FeatureCard = ({ title, noSub, cta }) => {
  const { wizard, thread, baseBat, baseBall } = Images;

  const images = [wizard, thread, baseBat, baseBall];

  return (
    <>
      <FeatureCardStyles>
        <div className="name">
          <h5>{title ? title : "Featured Activities"}</h5>
          {noSub ? "" : <p>See Full Library </p>}
          {cta && (
            <button>
              Add New <IoAddCircleOutline />
            </button>
          )}
        </div>
        <div className="cards">
          {images.map((image, index) => (
            <div className="card" key={image + index}>
              <img src={image} alt={image} />
            </div>
          ))}
        </div>
      </FeatureCardStyles>
    </>
  );
};

export default FeatureCard;
const FeatureCardStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  button {
    padding: 0.4rem;
    background: rgba(255, 184, 184, 0.5);
    border-radius: 10px;
  }

  .cards {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 450px) {
      display: block;
      width: 100%;
    }
    .card {
      width: 120px;
      height: 105px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      @media screen and (max-width: 450px) {
        width: 100%;
      }
      img {
        display: block;
        width: 70px;
      }
      &:nth-child(2) {
        img {
          width: 60px;
        }
      }
      &:nth-child(3) {
        img {
          width: 50px;
        }
      }
    }
  }
`;
