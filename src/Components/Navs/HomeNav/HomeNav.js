import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Images from "../../../Assets/Images/images";

const HomeNav = () => {
  const [open, setOpen] = useState(false);


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
            <button className="filled">login</button>=
            <Menu open={open} onClick={() => setOpen(!open)}>
              <span />
              <span />
              <span />
            </Menu>
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

const Menu = styled.div`
  width: 1.5rem;
  height: 2rem;
  display: none;
  position: fixed;
  cursor: pointer;
  top: 15px;
  right: 20px;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  span {
    height: 2px;
    width: 2.05rem;
    background: ${({ open }) => (open ? "#ccc" : "#606060")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
