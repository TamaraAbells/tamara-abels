import React from "react";
import styled from "styled-components";
import BlogPost from "../../Components/Cards/BlogPost";
import Stats from "../../Components/Cards/Stats";
import ThoughtsCard from "../../Components/Cards/ToughtsCard";

const RightCard = () => {
  return (
    <>
      <RightCardStyles>
        <Stats />
        <ThoughtsCard />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </RightCardStyles>
    </>
  );
};

export default RightCard;
const RightCardStyles = styled.div`
  width: 49%;

  @media screen and (max-width: 800px) {
    width: 100%;
   }
`;
