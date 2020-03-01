import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";

export default (
  <Switch>
    <Route path="/job-board" component={MainJobBoard} />
    <Route exact path="/" component={Home} />
  </Switch>
);
