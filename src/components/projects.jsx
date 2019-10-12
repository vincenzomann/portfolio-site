import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5}>
              <CardTitle className="reactCardTitle">Smart Home PWA</CardTitle>
              <CardText>
                IoT home automation system real-time progressive web app
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/vincenzomann/Smart-Home-PWA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
            {/* Project 2 */}
            <Card shadow={5}>
              <CardTitle className="reactCardTitle">Video Rental App</CardTitle>
              <CardText>
                Simulation of a video rental site utilising RESTful API services
                and CRUD operations
              </CardText>
            </Card>
            {/* Project 3 */}
            <Card shadow={5}>
              <CardTitle className="pythonCardTitle">Secure Blog</CardTitle>
              <CardText>
                A fully functional micro-blog with an emphasis on security and
                privacy without compromising on user experience and control
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/vincenzomann/the-music-room"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
        );

      case 1:
        return (
          <div className="projects-grid other-projects">
            {/* Project 1 */}
            <Card shadow={5}>
              <CardTitle>Ball Balance Game</CardTitle>
              <CardText>
                Real-time embedded system on an Arm Cortex-M7 board. UI and
                hardware logic written in C
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="Ball_Balance_Game_Small.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video
                  </a>
                </Button>
              </CardActions>
            </Card>
            {/* Project 2 */}
            <Card shadow={5}>
              <CardTitle>SD Card Programmer</CardTitle>
              <CardText>
                Raspberry Pi programmed in C++ and Bash, utilising Yocto and Qt
                for the OS and UI. (Permission to publicise granted by
                Noritake-Itron UK)
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="sd-card-programmer.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        {/* <h1>Projects</h1> */}
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Web</Tab>
            <Tab>Other</Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <span className="content">{this.toggleCategories()}</span>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
