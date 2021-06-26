import React from "react";
import styled from "styled-components";
import Images from "../../../Assets/Images/images";

const HomeNav = () => {
  return (
    <>
      <HomeNavStyles>
        <div className="flex-btw">
          <div className="logo">
            {/* eslint-disable-next-line */}
            <img src={Images.icon} />
          </div>
          <div className="cta">
            <button className="outline">sign up</button>
            <button className="filled">login</button>
          </div>
        </div>
      </HomeNavStyles>
    </>
  );
};

export default HomeNav;
const HomeNavStyles = styled.div`
  width: 100%;
  height: 14vh;
  background: url(${Images.navBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.5rem 4rem;

  .logo {
    img {
      width: 53px;
      height: 53px;
      object-fit: cover;
    }
  }

  .cta {
    button {
      width: 100px;
      height: 30px;
      padding: 0.3rem;
      margin-right: 1rem;
      border: 1.2px solid var(--dark-color);
      border-radius: 15px;
      transition: all 1s ease-in-out;
      font-size: 1rem;

      &.outline {
        background: none;
        color: var(--off-color);

        &:hover {
          background: var(--dark-color);
        }
      }

      &.filled {
        background: var(--dark-color);
        color: var(--off-color);

        &:hover {
          background: none;
        }
      }
    }
  }
`;
