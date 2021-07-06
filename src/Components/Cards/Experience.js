import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";
import Images from "../../Assets/Images/images";

const Experience = () => {
  const { navigator, translator } = Images;
  return (
    <>
      <ExperienceStyles>
        <BiLinkExternal className="external" />
        <div className="upper">
          <div>
            <h5>Experience</h5>
            <p className="pad">2 Years 5 Months</p>
          </div>
          <div>
            <h5>Hourly Rate</h5>
            <p>49 $ Per Hour</p>
          </div>
        </div>
        <div className="mid">
          <h5>Languages</h5>
          <div>
            <p className="pad">
              Spanish <span> - Fluent</span>
            </p>
            <p>
              French <span> - Fluent</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="foot">
          <p className="pad">
            <img src={navigator} alt="tag" /> Navigator
          </p>
          <p>
            <img src={translator} alt="tag" /> Translator
          </p>
        </div>
      </ExperienceStyles>
    </>
  );
};

export default Experience;
const ExperienceStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  position: relative;

  .external {
    position: absolute;
    right: 1.2rem;
    cursor: pointer;
    font-size: 1.2rem;
  }

  h5 {
    color: #f58642;
  }

  p {
    color: #3f3d56;
    font-weight: 500;
  }

  .pad {
    padding-left: 1rem;
  }

  .upper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mid {
    width: 80%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    span {
      opacity: 0.35;
    }
  }

  .foot {
    width: 83%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
