import React from "react";
import styled from "styled-components";

const Intro = ({ title, text, color }) => {
  return (
    <>
      <IntroStyles setColor={color}>
        <h3>{title}</h3>
        <p>{text}</p>
      </IntroStyles>
    </>
  );
};

export default Intro;
const IntroStyles = styled.div`
  text-align: center;
  h3 {
    font-size: 3.5rem;
    color: #163c5a;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 10px;
    line-height: 4rem;
  }

  p {
    color: ${({ setColor }) => setColor};
    font-style: italic;
  }
`;
