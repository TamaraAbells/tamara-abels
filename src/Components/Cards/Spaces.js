import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const Spaces = ({ heading, allData }) => {
  return (
    <>
      <SpacesStyles>
        <div className="name">
          <h5>{heading}</h5>
          <button>
            Add New <IoAddCircleOutline />
          </button>
        </div>
        {allData.length &&
          allData.map((data) => (
            <div className="box">
              <div className="img">
                <img src={data.imgUrl} alt={data.imgUrl} />
              </div>
              <div className="info">
                <div>
                  <h6>{data.title}</h6>
                  <p>{data.location}</p>
                </div>
                <div>
                  <p>{data.bedrooms} Bedrooms</p>
                  <p>{data.bathrooms} Full Bath</p>
                </div>
              </div>
              <div className="cta">
                <p>
                  <AiFillDollarCircle /> <span>{data.price}</span>/Night
                </p>
                <div>
                  <button onClick={data.moreFx && data.moreFx}>More</button>
                  <button onClick={data.editFx && data.editFx}>Edit</button>
                </div>
              </div>
            </div>
          ))}
      </SpacesStyles>
    </>
  );
};

export default Spaces;
const SpacesStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  .name {
    button {
      padding: 0.4rem;
      background: rgba(76, 175, 80, 0.51);
      border-radius: 10px;
    }
  }
  .box {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 1rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .img {
      height: 130px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }

    .cta {
      padding-top: 0.2rem;
      height: 100%;
      position: relative;

      p {
        color: #2c66b8;
        font-size: 0.9rem;

        span {
          font-size: 1.05rem;
          font-weight: bold;
        }

        svg {
          font-size: 1rem;
        }
      }
      div {
        position: absolute;
        bottom: 0;
      
        button {
          width: 97px;
          height: 30px;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
`;
