import React, { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import ConcertDetails from "./ConcertDetails";
import styled from "styled-components";

const ConcertsCalendarWrapper = styled.section`
  font-family: "Work Sans", sans-serif;
  padding: 2.5rem 4.7rem;
  h2 {
    background-color: #1a2433;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e2f1ff;
    height: 4rem;
    font-weight: 500;
    font-size: 1.3rem;
    border-radius: 0.375rem;
  }
  .info {
    font-weight: 300;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 43rem) {
    padding: 2.5rem 2rem;
  }
`;

const ConcertsCalendar = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    console.log("User", user);
  });

  return (
    <ConcertsCalendarWrapper>
      <h2>Events calendar</h2>
      {!user ? (
        <h3 className="info">
          You need to sign in to display favourite artists.
        </h3>
      ) : !user.concerts.length || !user.concerts ? (
        <h3 className="info">
          You don't have any concerts in your calendar yet.
        </h3>
      ) : (
        user.concerts.map(event => (
          <ConcertDetails key={event.id} event={event} />
        ))
      )}
    </ConcertsCalendarWrapper>
  );
};

export default ConcertsCalendar;
