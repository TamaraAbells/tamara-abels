import React from "react";
import styled from "styled-components";

import Images from "../../Assets/Images/images";
import TopNav from "../../Components/Navs/TopNav/TopNav";

// import images
const { guilderCover } = Images;

const ProfileHeader = () => {
  return (
    <>
      <HeaderStyles>
        <TopNav />
        <div className="banner"></div>
      </HeaderStyles>
    </>
  );
};

export default ProfileHeader;
const HeaderStyles = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  .banner {
    width: 100%;
    height: 50vh;
    background: url(${guilderCover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
