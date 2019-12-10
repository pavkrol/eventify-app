import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|PT+Sans+Narrow|Rubik:700|Work+Sans:300,400,500&display=swap');

:root {
  --bp-small: 24.15;
  --bp-medium: 43.75;
  --bp-large: 60.25;
  --bp-xlarge: 75;

  --h2-font-size-min: 2;
  --h2-font-size-max: 5;

  --h3-font-size-min: 1;
  --h3-font-size-max: 2;
}

h2 {
  font-size: calc( var(--h2-font-size-min) * 1rem);
}
h3 {
  font-size: calc( var(--h3-font-size-min) * 1rem);
}

@media screen and (min-width: 24.15rem) {
  h2 {
    font-size: calc((var(--h2-font-size-min) * 1rem) + (var(--h2-font-size-max) - var(--h2-font-size-min) ) * ((100vw - ( var(--bp-small) * 1rem )) / (var(--bp-xlarge) - var(--bp-small) )));
  }
  h3 {
    font-size: calc((var(--h3-font-size-min) * 1rem) + (var(--h3-font-size-max) - var(--h3-font-size-min) ) * ((100vw - ( var(--bp-small) * 1rem )) / (var(--bp-xlarge) - var(--bp-small) )));
  }
}


@media screen and (min-width: 75rem){
  h2 {
    font-size: calc(var(--h2-font-size-max) * 1rem);
  } 
  h3 {
    font-size: calc(var(--h3-font-size-max) * 1rem);
  } 
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
html {
  color: #fff;
}
textarea,
input.text,
input[type="text"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}
a {
  text-decoration:none; 
  color:inherit; 
  cursor:pointer;
}
button {
  background-color:transparent; 
  color:inherit; 
  border-width:0; 
  padding:0; 
  cursor:pointer;
}
figure {
  margin:0;
}
input::-moz-focus-inner {
  border:0; 
  padding:0;
  margin:0;
}
ul, ol, dd {
  margin:0; 
  padding:0; 
  list-style:none;
}
h1, h2, h3, h4, h5, h6 {
  margin:0; 
}
p {
  margin:0;
}
cite {
  font-style:normal;
}
fieldset {
  border-width:0; 
  padding:0; 
  margin:0;
}
`;

export default GlobalStyle;
