import React from "react";
import styled from "styled-components";

const GridCard = ({ title, smallText, images, hoverEffect }) => {
  return (
    <>
      <GridCardStyles>
        <div className="name">
          <h5>{title}</h5>
          <p>{smallText}</p>
        </div>
        <div className="grids">
          {images &&
            images.map((image, index) => (
              <div className="grid" key={image + index}>
                <img src={image} alt={image} />
                {hoverEffect && hoverEffect.length ? (
                  <div className="hover">
                    <p>{hoverEffect[index]}</p>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </GridCardStyles>
    </>
  );
};

export default GridCard;
const GridCardStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  img {
    transition: transform 0.5s ease-in-out;
  }
  .grids {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 1.2rem;
    grid-auto-flow: dense;

    @media (max-width: 789px) {
      grid-template-columns: 50% 50%;
      padding: 1.5rem;
    }

    @media (max-width: 450px) {
      grid-template-columns: 100%;
    }

    .grid {
      width: 100%;
      height: 150px;
      overflow: hidden;
      border-radius: 20px;
      cursor: pointer;
      position: relative;
      &:hover {
        img {
          transform: scale(1.03);
        }

        .hover {
          opacity: 1;
          visibility: visible;
        }
      }

      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 20px;
      }

      .hover {
        position: absolute;
        z-index: 2;
        width: 90%;
        height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(63, 61, 86, 0.67);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease-in-out;

        p {
          font-weight: 500;
          font-size: 1.4rem;
          text-align: center;
          color: #fee05f;
          margin: 0;
        }
      }
    }
  }
`;
