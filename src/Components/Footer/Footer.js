import React from "react";
import styled from "styled-components";
import { IoLocationOutline, IoLogoTwitter } from "react-icons/io5";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Images from "../../Assets/Images/images";

const { icon, fot1, footerBg } = Images;

const Footer = () => {
  return (
    <>
      <FooterStyles>
        <div className="footer-top">
          <div className="logo">
            <img src={icon} alt="logo" />
          </div>
          <div className="company">
            <session>
              <h6>Contact Us</h6>
              <div>
                <p>
                  <IoLocationOutline />
                </p>
                <p> 389 South Hill Field Drive Fenton, MI 48430</p>
              </div>
              <div>
                <p>
                  <AiOutlineMail />
                </p>
                <p>tourtor@tourtor.com</p>
              </div>
              <div>
                <p>
                  <AiOutlinePhone />
                </p>
                <p>+1-202-555-0174 </p>
              </div>
            </session>
            <session>
              <h6>Recently Visited</h6>
              <div className="rece">
                <img src={fot1} alt="img" />
                <aside>
                  <p>Mountain Views</p>
                  <p>Preview</p>
                </aside>
              </div>
              <div className="rece">
                <img src={fot1} alt="img" />
                <aside>
                  <p>Mountain Views</p>
                  <p>Preview</p>
                </aside>
              </div>
              <div className="rece pointer">
                <p>
                  View More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />
                  </span>{" "}
                </p>
              </div>
            </session>
            <session>
              <h6>Quick links</h6>
              <ul>
                <li>How Page</li>
                <li>How Page</li>
                <li>How Page</li>
              </ul>
            </session>
          </div>
          <div className="cta">
            <h6>Newsletter</h6>
            <p>Register with us to receive latest travel promotions from us.</p>
            <form>
              <input type="text" placeholder="Enter Your Email Here" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p id="follow">
            Follow Us On{" "}
            <span>
              <IoLogoTwitter />
            </span>{" "}
            <span>
              <AiFillFacebook />
            </span>{" "}
            <span>
              <AiOutlineInstagram />
            </span>{" "}
            <span>
              <AiOutlineYoutube />
            </span>{" "}
          </p>
          <hr />
          <div>
            <div>
              <p>
                Privacy Policy <strong> | </strong>
              </p>{" "}
              <p>
                {" "}
                Terms of Use <strong> | </strong>{" "}
              </p>{" "}
              <p> Compliance</p>
            </div>
            <p>
              Copyright @{new Date().getFullYear()} Tourtor, All rights
              reserved.
            </p>
          </div>
        </div>
      </FooterStyles>
    </>
  );
};

export default Footer;
const FooterStyles = styled.div`
  width: 100%;
  margin-top: 6rem;
  padding: 3rem;
  background: url(${footerBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  #follow {
    @media screen and (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    padding: 2rem;
  }

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
  .footer-top {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      display: block;
      text-align: left;
    }

    .company {
      display: flex;
      justify-content: space-between;
      width: 50%;
      @media screen and (max-width: 800px) {
        display: block;
        width: 100%;
      }
      section {
        width: 80%;
      }

      div {
        display: flex;
        align-items: center;

        &.rece {
          justify-content: center;

          @media screen and (max-width: 800px) {
            justify-content: left;
          }
        }

        p:nth-child(2) {
          margin-left: 0.5rem;
          width: 80%;
        }

        img {
          width: 45px;
          height: 45px;
          margin-bottom: 1rem;
        }

        aside {
          margin-left: 0.5rem;
          margin-bottom: 1rem;

          p {
            margin: 0;
          }
        }

        .pointer {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      ul {
        li {
          font-style: normal;
          font-weight: normal;
          font-size: 0.85rem;
        }
      }
    }

    .cta {
      width: 20%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      input {
        background: #012234;
        box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: block;
        padding: 0.5rem 1rem;
        color: #fff;
        margin-bottom: 1rem;
      }

      button {
        background: #34c2dd;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: #fff;
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;

    hr {
      border: none;
      border-bottom: 2px solid #fff;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        display: block;

        strong {
          display: none;
        }
      }

      p {
        margin-right: 0.5rem;
        cursor: pointer;

        span svg {
          padding-left: 0.8rem;
        }
      }
    }
  }
`;
