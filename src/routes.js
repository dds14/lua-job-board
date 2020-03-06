import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";
import BlogHome from "./components/Blog/BlogHome";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/job-board" component={MainJobBoard} />
    <Route path="/blog" component={BlogHome} />
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
  </Switch>
);
