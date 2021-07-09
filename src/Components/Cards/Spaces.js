import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiBed, BiBath } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
                  <p>
                    <HiOutlineLocationMarker /> {data.location}
                  </p>
                </div>
                <div>
                  <p>
                    <BiBed /> {data.bedrooms} Bedrooms
                  </p>
                  <p>
                    <BiBath /> {data.bathrooms} Full Bath
                  </p>
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
  height: auto;

  .name {
    button {
      padding: 0.4rem;
      background: rgba(76, 175, 80, 0.51);
      border-radius: 10px;
      display: flex;
      align-items: center;

      svg {
        margin-left: 0.3rem;
      }
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
    position: relative;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    .img {
      height: 130px;
      overflow: hidden;

      @media screen and (max-width: 600px) {
        width: 100%;
        height: 170px;
        margin-bottom: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }

    .info {
      height: 100%;
      margin-left: 1rem;
      div {
        &:nth-child(1) {
          margin-bottom: 2rem;

          @media screen and (max-width: 600px) {
            margin-bottom: 0;
          }
        }
        h6 {
          font-weight: 500;
          font-size: 1.2rem;
          color: #2c66b8;
          margin: 0;
        }

        p {
          font-size: 0.9rem;
          color: #34c2dd;
          margin: 0;
        }
      }
    }

    .cta {
      padding-top: 0.2rem;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;

      @media screen and (max-width: 600px) {
        margin-top: 1rem;
        display: block;
        padding: 0 1rem;
      }

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
        bottom: 1rem;
        right: 1rem;
        display: flex;
        margin-bottom: auto;
        margin-top: 30%;

        @media screen and (max-width: 600px) {
          margin-top: 0.3rem;
         }
        button {
          width: 97px;
          height: 30px;
          border-radius: 5px;
          color: #fff;

          &:nth-child(1) {
            background: #f58642;
          }
          &:nth-child(2) {
            background: #fee05f;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`;
