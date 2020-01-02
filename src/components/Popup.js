import React from "react";
import styled from "styled-components";
import ChooseQuery from "./ChooseQuery";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  .box {
    width: 60vw;
    height: 60vh;
    background: linear-gradient(168.44deg, #151e2c 67.82%, #1a3856 93.99%);
    border-radius: 0.5625rem;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    div {
      min-width: 40%;
      flex: 1;
    }
    h2 {
      font-family: "Work Sans", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      width: 100%;
      height: 3.75rem;
      padding: 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 0.7rem 1rem;
      background-color: #1a2433;
      border-radius: 0.3125rem;
    }
  }
`;

const Popup = ({ data, confirmChoice }) => {
  const artists = data.resultsPage.results.artist;

  return (
    <PopupWrapper>
      <div className="box">
        <h2>
          There are more than one result mathing your query. Please, choose one
          of the following artists:
        </h2>
        {artists.map(artist => {
          return (
            <ChooseQuery
              key={artist.id}
              name={artist.displayName}
              id={artist.id}
              action={confirmChoice}
            />
          );
        })}
      </div>
    </PopupWrapper>
  );
};

export default Popup;
