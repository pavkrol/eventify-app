import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  height: 60px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px 10%;
    height: auto;
    div {
      margin-bottom: 10px;
    }
    div:last-child {
      margin-bottom: 0;
    }
  }
`;

const FooterItem = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 400;
  p {
    color: #a5abbd;
    display: inline-block;
    margin-right: 5px;
  }
  a {
    color: #e2f1ff;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <p>Designed by</p>
        <a href="https://www.pavkrol.pl">pavkrol</a>
      </FooterItem>
      <FooterItem>
        <p>Provided by</p>
        <a href="https://www.songkick.com">Songkick</a>
      </FooterItem>
      <FooterItem>
        <p>Photo by </p>
        <a href="https://www.unsplash.com">Unsplash</a>
      </FooterItem>
    </FooterWrapper>
  );
};

export default Footer;
