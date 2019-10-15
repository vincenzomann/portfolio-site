import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Grid className="homepage-grid">
          {/* react MDL grid -12 column layout */}
          {/* <Cell col={12}>
        </Cell> */}
          <Cell col={12}>
            <img className="profile-pic" src="profilepic.png" alt="" />
            <div className="banner-text">
              <h1>MERN Full-stack Developer</h1>
              <hr />
              <p>MongoDB | ExpressJS | React | NodeJS</p>
              <p>HTML | CSS | JavaScript | Redux | Mongoose | Firebase | Git</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/vincenzo-mann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/vincenzomann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
