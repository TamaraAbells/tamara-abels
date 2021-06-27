import React from "react";
import styled from "styled-components";
import Images from "../../../Assets/Images/images";

const TopNav = () => {
  const { icon, smallHeart, user } = Images;
  return (
    <>
      <TopNavStyles>
        <div className="nav-group">
          <div className="nav-logo">
            <img src={icon} alt="Logo" />
          </div>
          <ul className="nav-links">
            <li>Destinations</li>
            <li>Activities</li>
            <li>Search</li>
            <li>More</li>
          </ul>
        </div>
        <div className="nav-group">
          <div className="globe">
            <img src={smallHeart} alt="heart" />
          </div>
          <div className="avatar">
            <img src={user} alt="user" />
          </div>
        </div>
      </TopNavStyles>
    </>
  );
};

export default TopNav;
const TopNavStyles = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background: #fff;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .nav-group {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .nav-logo {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
    }

    .nav-links {
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 0;

      li {
        margin-right: 1.5rem;
        font-style: normal;
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 28px;
        color: #3f3d56;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      }
    }

    .globe {
      width: 45px;
      height: 35px;
      position: absolute;
      right: 40px;
      top: 20px;
    }

    .avatar {
      width: 55px;
      height: 55px;
      border: 2px solid #3f3d56;
      border-radius: 100%;
    }
  }
`;
