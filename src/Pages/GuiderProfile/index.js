import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import ProfileHeader from "./Header";
import ProfileBody from "./ProfileBody";

const GuiderProfile = () => {
  return (
    <>
      <ProfileStyles>
        <ProfileHeader />
        <ProfileBody />
        <Footer />
      </ProfileStyles>
    </>
  );
};

export default GuiderProfile;
const ProfileStyles = styled.div`
  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: normal;
    font-weight: 500;
    h5 {
      font-size: 1.4rem;
      line-height: 2rem;
      color: #3f3d56;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.8rem;
      text-align: right;
      color: rgba(63, 61, 86, 0.51);
      cursor: pointer;
    }
  }
`;
