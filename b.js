const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello Im A Ronaldo!"),
    React.createElement("h2", { id: "heading2" }, "Hello Im A Halland!!"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello Im A Cristiano!"),
    React.createElement("h2", { id: "heading2" }, "Hello Im A Earling!!"),
  ])]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" /*for Attribute like ID or class*/ },
//   "Hello React! From One Piece World!!!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);






// This is From App.js From Staring basic   
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello Im A Ronaldo!"),
//     React.createElement("h2", { id: "heading2" }, "Hello Im A Halland!!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading" }, "Hello Im A Cristiano!"),
//     React.createElement("h2", { id: "heading2" }, "Hello Im A Earling!!"),
//   ]),
// ]);


// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" /*for Attribute like ID or class*/ },
// //   "Hello React! From One Piece World!!!!"
// // );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



