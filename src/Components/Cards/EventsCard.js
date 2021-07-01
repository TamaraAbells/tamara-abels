import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import { MdDateRange, MdAccessTime } from "react-icons/md";

const EventsCard = ({ cardWidth, cardDisplay }) => {
  const { events1, events2 } = Images;

  return (
    <>
      <EventsCardStyles cardWidth={cardWidth} cardDisplay={cardDisplay}>
        <div className="top">
          <h5>Upcoming Events</h5>
        </div>

        <div className="events">
          <div className="event">
            <div className="bg">
              <img src={events1} alt="event" />
            </div>
            <div className="tx">
              <h6>Party at Bali</h6>
              <div className="event-info">
                <p>
                  <span>
                    <MdDateRange /> 23rd May 2021
                  </span>
                </p>
                <p>
                  <span>
                    <MdAccessTime /> 7 PM - Midnight
                  </span>
                </p>
                <p className="des">
                  Event description here.Event description here.Event
                  description here.
                </p>
              </div>
              <button>Going</button>
            </div>
          </div>
          <div className="event">
            <div className="bg">
              <img src={events2} alt="event" />
            </div>
            <div className="tx">
              <h6>Holi Fest</h6>
              <div className="event-info">
                <p>
                  <span>
                    <MdDateRange /> 23rd May 2021
                  </span>
                </p>
                <p>
                  <span>
                    <MdAccessTime /> 7 PM - Midnight
                  </span>
                </p>
                <p className="des">
                  Event description here.Event description here.Event
                  description here.
                </p>
              </div>
              <button>Going</button>
            </div>
          </div>
        </div>
      </EventsCardStyles>
    </>
  );
};

export default EventsCard;
const EventsCardStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;

  .top {
    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      color: #3f3d56;
    }
  }

  .events {
    width: 100%;
    display: ${({ cardDisplay }) => cardDisplay};
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;

    .event {
      width: ${({ cardWidth }) => cardWidth};
      background: #ffffff;
      border: 1px solid #fee05f;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 1rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 2rem;

      .bg {
        width: 48%;

        img {
          width: 100%;
          height: 180px;
        }
      }

      .tx {
        width: 49%;
        h6 {
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #2c66b8;
        }

        .event-info {
          p {
            font-size: 12px;
            line-height: 18px;
            color: #f58642;
            margin: 0;
            margin-bottom: 0.3rem;
          }

          .des {
            width: 100%;
            font-size: 10px;
            line-height: 15px;
            color: #3f3d56;
            margin: 0.6rem 0;
          }
        }

        button {
          width: 100px;
          height: 28px;
          background: #3f3d56;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
`;
