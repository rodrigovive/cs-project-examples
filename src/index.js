import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <main>
      <h1 className="text-lg">Init project</h1>
    </main>
  );
};

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
