import React, { Component } from "react";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Router from "./routes/routes";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header
          className="header"
          title={
            <Link className="titlelink" to="/">
              Vincenzo Mann
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link className="titlelink" id="drawertitle" to="/">
              Vincenzo Mann
            </Link>
          }
        >
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content className="page-content">
          <Router />
        </Content>
      </Layout>
    );
  }
}

export default App;
