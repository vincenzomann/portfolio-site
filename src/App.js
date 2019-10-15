import React, { Component } from "react";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Router from "./routes/routes";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  hideDrawer() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

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
          <Navigation id="navlinks">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              className="titlelink"
              id="drawertitle"
              to="/"
              onClick={() => this.hideDrawer()}
            >
              Vincenzo Mann
            </Link>
          }
        >
          <Navigation>
            <Link to="/projects" onClick={() => this.hideDrawer()}>
              Projects
            </Link>
            <Link to="/about" onClick={() => this.hideDrawer()}>
              About Me
            </Link>
            <Link to="/cv" onClick={() => this.hideDrawer()}>
              CV
            </Link>
            <Link to="/contact" onClick={() => this.hideDrawer()}>
              Contact
            </Link>
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
