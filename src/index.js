import React from "react";
import ReactDOM from "react-dom";
import Stars from "./Stars";

import "./styles.css";

const Box = props => {
  let box = [];
  for (let i = 1; i <= props.n; ++i) {
    box.push(<div>{props.children}</div>);
  }
  return <div className="box">{box}</div>;
};

function App() {
  return (
    <div className="App">
      <Box n={50}>
        <Stars val={3} />
      </Box>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
