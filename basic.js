
import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "One Piece is Real!"
);

// JSX
const jsxHeading = (
  <h1 id="heading" className="root">
    One piece is JSX!
  </h1>
);

// React Functional Component
const HeadingComponents = () => {
  return <h1 id="heading">Namaste React Functional Component1</h1>;
};

// if you want write multple line then do it with ()
const Title = () => <h1 id="heading2"> This is Title You Want!</h1>;

const Title1 = () => <h1 id="heading3"> The Title Is One Piece!</h1>;

const Sas = () => {
  return <p id="heading4">Want to beacome Pirate King!</p>;
};

const Asa = () => (
  <div>
    <h2>There is Only Four Younko!</h2>
    <h3>There is World Government!</h3>
  </div>
);


// This is Wrritten in arrow Function   
const HeadingComponents1 = () => (
  <div id="container">
    {jsxHeading}
    <Title />
    <Title1 />
    <Sas />
    <Title1 />
    <Asa />
    <h1 id="heading">Namaste React Functional Component2</h1>
  </div>
);


// This is in Normal Function  
// const HeadingComponents1 = function() {
//   return (
//     <div id="container">
//     {jsxHeading}
//     <Title />
//     <Title1 />
//     <Sas />
//     <Title1 />
//     <Asa />
//     <h1 id="heading">Namaste React Functional Component2</h1>
//   </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents1 />);
