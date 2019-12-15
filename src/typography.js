import { css } from "styled-components";

export const fluidFont = (minFont, maxFont, minScreen, maxScreen) => css`
  font-size: calc(${minFont} * 1rem);
  @media screen and (min-width: ${minScreen}rem) {
    font-size: calc(
      (${minFont} * 1rem) + (${maxFont} - ${minFont}) *
        ((100vw - (${minScreen} * 1rem)) / (${maxScreen} - ${minScreen}))
    );
  }
  @media screen and (min-width: ${maxScreen}rem) {
    font-size: calc(${maxFont} * 1rem);
  }
`;
