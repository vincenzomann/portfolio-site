import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../components/homepage";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import CV from "../components/cv";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/cv" component={CV} />
  </Switch>
);

export default Router;
