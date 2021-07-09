import React from "react";
import styled from "styled-components";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const ProfileBody = () => {
  return (
    <>
      <ProfileBodyStyles>
        <LeftCard />
        <RightCard />
      </ProfileBodyStyles>
    </>
  );
};

export default ProfileBody;
const ProfileBodyStyles = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 0 3rem;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 0 1rem;
  }
`;
