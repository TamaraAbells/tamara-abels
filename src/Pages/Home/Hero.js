import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import HomeNav from "../../Components/Navs/HomeNav/HomeNav";

const Hero = () => {
  return (
    <>
      <HeroStyles>
        <HomeNav />
        <div className="hero">
          <h1>TOURTOH</h1>
          <div className="hero-cta">
            <form>
              <input type="text" placeholder="where" />
              <input type="text" placeholder="when" />
              <input type="text" placeholder="why" />
              <button>Explore</button>
            </form>
          </div>
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;
const HeroStyles = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Images.heroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .hero {
    width: 80%;
    margin: 4rem auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: var(--white-color);
      font-size: 7rem;
      text-transform: uppercase;
    }

    .hero-cta {
      width: 685px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      margin-top: 2rem;
      padding: 1.5rem;
      input {
        width: 150px;
        height: 45px;
        padding: 0 1rem;
        margin-right: 0.7rem;
        border-radius: 6px;
      }

      button {
        width: 150px;
        height: 45px;
        border-radius: 6px;
        background: var(--off-color-1);
        color: var(--yellow-color-4);
        font-weight: bold;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
