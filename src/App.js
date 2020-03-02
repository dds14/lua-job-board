import React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>{routes}</header>
      </div>
    </HashRouter>
  );
}

export default App;
