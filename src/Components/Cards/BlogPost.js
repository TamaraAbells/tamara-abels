import React from "react";
import styled from "styled-components";
import {
  IoLocationSharp,
  IoHeartCircle,
  IoArrowRedoSharp,
} from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import Images from "../../Assets/Images/images";

const BlogPost = () => {
  const { user, blogCover } = Images;
  return (
    <>
      <BlogPostStyles>
        <div className="post-top">
          <img src={user} alt="user" />
          <div className="user-info">
            <p>@Travel_girl_AO</p>
            <small>
              <IoLocationSharp /> Grand Canyon <span>08th May 2021 </span>
              Traveler
            </small>
          </div>
        </div>
        <div className="post-center">
          <h2>
            “I believe in evolution. But I also believe, when I hike the Grand
            Canyon and see it at sunset, that the hand of God is there also.”
          </h2>
          <small>#tourtoh#grandcanyon#sunrise#morning#travel#adventure</small>
        </div>
        <div className="post-img">
          <img src={blogCover} alt="Cover" />
        </div>
        <div className="post-footer">
          <p>
            <span>
              <IoHeartCircle />
            </span>
            2k
            <small>Love</small>
          </p>
          <p>
            <span>
              <IoArrowRedoSharp />
            </span>
            1.5k
            <small>shares</small>
          </p>
          <p>
            <span>
              <SiTelegram />
            </span>
            346
            <small>USE DIRECTIONS</small>
          </p>
        </div>
      </BlogPostStyles>
    </>
  );
};

export default BlogPost;
const BlogPostStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;

  .post-top {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border: 2px solid #3f3d56;
      border-radius: 100%;
    }

    .user-info {
      margin-left: 1rem;

      p {
        font-weight: 500;
        font-size: 1.2rem;
        color: #3f3d56;
        margin: 0;
      }

      small {
        font-size: 0.8rem;
        color: rgba(63, 61, 86, 0.5);

        span {
          border-left: 1px solid;
          border-right: 1px solid;
          padding: 0 0.2rem;
        }
      }
    }
  }

  .post-center {
    margin: 2rem 0 1rem;
    h2 {
      font-weight: 500;
      font-size: 1.4rem;
      color: #3f3d56;
    }

    small {
      font-weight: 500;
      font-size: 0.9rem;
      color: #2c66b8;
    }
  }

  .post-img {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-footer {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    p {
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 27px;

      small {
        font-size: 0.75rem;
        padding-left: 0.5rem;
      }

      span {
        margin-right: 0.5rem;
        font-size: 1.4rem;
      }
      &:nth-child(1) {
        padding-left: 1.5rem;
        color: #0693a0;
      }
      &:nth-child(2) {
        padding-left: 1.5rem;
        color: #f58642;
      }
      &:nth-child(3) {
        padding-left: 1.5rem;
        color: #2c66b8;
      }
    }
  }
`;
