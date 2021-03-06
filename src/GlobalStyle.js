import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|PT+Sans+Narrow|Rubik:700|Work+Sans:300,400,500&display=swap');


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
html, body {
  color: #fff;
  overflow-x: hidden;
  position: relative;
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
