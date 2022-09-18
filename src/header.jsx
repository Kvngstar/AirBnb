import React from "react";
import sitelogo from "./Files/sitelogo.png"
import topimage from "./Files/Group77.png"

export default function () {
    return (
      <div className="container">
        <div className="ist-section">
          <div className="header">
            <img src={sitelogo} alt="site-logo" className="logo-container" /> <span className="airbnblogo">airbnb</span>
          </div>
          <div className="top_image">
            <img src={topimage} alt="image" className="top-image" />
          </div>
        </div>
        
       
      </div>
    );
}
