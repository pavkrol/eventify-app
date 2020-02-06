import React, { useEffect } from "react";
import styled from "styled-components";
import ChooseQuery from "./ChooseQuery";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh + 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate3d(0, -20px, 0);
  opacity: 0;
  .box {
    width: 60vw;
    height: 60vh;
    background: linear-gradient(168.44deg, #151e2c 67.82%, #1a3856 93.99%);
    border-radius: 0.5625rem;
    justify-content: space-between;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 1rem;
    button {
      flex-basis: 48%;
      @media (max-width: 50rem) {
        flex-basis: 100%;
      }
    }
    h2 {
      font-family: "Work Sans", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      width: 100%;
      min-height: 3.75rem;
      padding: 0.8rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.7rem;
      background-color: #293850;
      border-radius: 0.3125rem;
    }
    @media (max-width: 62.5rem) {
      width: 80vw;
      height: 80vh;
    }
  }
`;

const Popup = ({ data, confirmChoice }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "unset");
  }, []);

  return (
    <PopupWrapper>
      <div className="box">
        <h2>
          There are more than one result mathing your query. Please, choose one
          of the following artists:
        </h2>
        {data.map(item => {
          return (
            <ChooseQuery
              key={item.id}
              name={
                item.country !== undefined
                  ? `${item.name} ${item.state} ${item.country}`
                  : item.displayName
              }
              type={item.country !== undefined ? "city" : "artist"}
              id={item.id}
              action={confirmChoice}
            />
          );
        })}
      </div>
    </PopupWrapper>
  );
};

export default Popup;
