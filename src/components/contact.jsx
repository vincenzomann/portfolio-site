import React, { Component } from "react";
// import { List, ListItem, ListItemContent } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <h2>Contact Me</h2>
        <hr />

        <div className="contact-list">
          <ul>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>vincenzomann@outlook.com</span>
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-home" aria-hidden="true" />
                <span>11C Handforth Road, London, SW9 0LL</span>
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true" />
                <span>07530 700160</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
