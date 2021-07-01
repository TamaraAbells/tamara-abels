import React from "react";
import styled from "styled-components";
import BlogPost from "../../Components/Cards/BlogPost";
import ThoughtsCard from "../../Components/Cards/ToughtsCard";

const MidSection = () => {
  return (
    <>
      <MidSectionStyles>
        <ThoughtsCard />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </MidSectionStyles>
    </>
  );
};

export default MidSection;
const MidSectionStyles = styled.div`
  width: 48%;
`;
