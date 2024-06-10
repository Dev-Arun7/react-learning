import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement("h1", { id: "hello" }, "Hello React");
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);
const jsx = <h1 id="jsx"> Jsx text...</h1>;
root.render(jsx);

// console.log(heading);
console.log(jsx);
