import React, { Component } from "react";

export default class CV extends Component {
  render() {
    return (
      <div>
        <a href="Vincenzo_Mann_CV.docx" download>
          <h4 id="download-link">Download my CV</h4>
        </a>
        {/* <img src="Vincenzo_Mann_CV.jpg" alt="cv" width="100%" /> */}
        <div id="cv-container">
          <iframe id='cv' title='Vincenzo_Mann_CV' src="https://docs.google.com/document/d/e/2PACX-1vSycwfqZmFhoH_pCcLvnfxeUBPjB0vwOKc6LHI0Udo16Grr8iTPrL1yhSNM8wRi4zBsjyCyHXRi3v_k/pub?embedded=true"></iframe>
        </div>
      </div>
    );
  }
}
