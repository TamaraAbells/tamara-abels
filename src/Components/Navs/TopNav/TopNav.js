import React from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import Images from "../../../Assets/Images/images";
import { Link } from "react-router-dom";

const TopNav = () => {
  const { icon, smallHeart, user } = Images;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TopNavStyles>
        <div className="nav-group">
          <div className="nav-logo">
            <Link to="/">
              <img src={icon} alt="Logo" />
            </Link>
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
          <div className="toggle" onClick={onOpen}>
            <RiBarChartHorizontalLine />
          </div>
        </div>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <NavLinks onClick={onClose}>
                <div className="globe">
                  <img src={smallHeart} alt="heart" />
                </div>
                <div className="avatar">
                  <img src={user} alt="user" />
                </div>
                <li>Destinations</li>
                <li>Activities</li>
                <li>Search</li>
                <li>More</li>
              </NavLinks>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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

  @media screen and (max-width: 600px) {
    height: 10vh;
    padding: 1rem;
    overflow: hidden;
  }

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
      margin-right: 2rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 0;

      @media screen and (max-width: 600px) {
        display: none;
      }

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

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .avatar {
      width: 55px;
      height: 55px;
      border: 2px solid #3f3d56;
      border-radius: 100%;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .toggle {
      display: none;

      @media screen and (max-width: 600px) {
        display: block;
        margin-right: 0.3rem;

        svg {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const NavLinks = styled.ul`
  width: 100%;
  padding: 1rem;

  li {
    list-style: none;
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  .globe {
    width: 45px;
    height: 35px;
    position: absolute;
    left: 70px;
    top: 50px;
  }

  .avatar {
    width: 55px;
    height: 55px;
    border: 2px solid #3f3d56;
    border-radius: 100%;
  }
`;
