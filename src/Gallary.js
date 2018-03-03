import React, { Component } from 'react';
import './Gallary.css';

class Gallary extends Component {
  constructor() {
    super();
    this.state = this.consoleDisplayTxt().Images;
  }

  consoleDisplayTxt(){
    var obj = require("./testImageData.json");
    return obj;
  }

  render(){
    return(
      <div class="wrapper">
        {
          this.state.filter(res => res.Purpose === "PhotoOpp").map((res) => (
            <div class="box" >
              <img src={res.ImagePath + res.ImageName} alt="image"/>
            </div>
		        )
          )
        }
      </div>
    )
  }
}
export default Gallary;
