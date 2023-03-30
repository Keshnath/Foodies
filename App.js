// session 1

// hot module reload

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id : "heading"},"this is heading created with react");

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading1 = React.createElement("h1" ,{id : "one"} , "heading 1");
// const heading2 = React.createElement("h2",{id : "two"},"heading 2");

// const container = React.createElement("div",{id : "container"},[heading1 , heading2]);

// jsx => React.createElement => object => DOm
// react elemet is nothing just object

const heading = (
  <h1 id="1">
    {" "}
    this is not html inside js it is fancy way to write html in react and this
    is converted by babel , into react the create elemet an all . and it is
    called as react elemet{" "}
  </h1>
);

//component -- 1 functional , => js fn that returns jsx and some combile of element and jsx , react component element etc
//               2 class based component
const Title = () => {
  return (
    <h1>
      this is functional component call insile the headigncomponent using
      function call like normal function
    </h1>
  );
};
let a = 10;
const HeadingComponent = function () {
  // name starts with capital letter to better convention , good practice
  return (
    <div>
      {/* element call */}
      {heading}
      {/* component composition == component inside a component */}
      {Title()}
      {/* or we can call it as  */}
      
      <Title />

      {/* like that we can write any js code  */}
      {console.log(a)}
      {10 + 5}
      {console.log("any js code can be here")}
      <h1>this is functional component !</h1>
    </div>
  );
};

// this is to render react element
// root.render(heading);

// to render react component
root.render(<HeadingComponent />);
