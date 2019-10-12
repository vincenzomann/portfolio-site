import React, { Component } from "react";

export default class CV extends Component {
  render() {
    return (
      <div>
        <a href="Vincenzo_Mann_CV.docx" download>
          <h4 id="download-link">Download my CV</h4>
        </a>
        <img src="Vincenzo_Mann_CV.jpg" alt="cv" width="100%" />
      </div>
    );
  }
}
