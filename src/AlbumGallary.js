import React, { Component } from 'react';


class AlbumGallary extends Component {
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
      <div>
        {
          this.state.filter(res => res.Purpose === "InteriorDesign").map((res) => (

            <img src="{res.ImagePath}{res.ImageName}"/>
            <h2>{res.AlbumName}</h2>
		        )
          )
        }
      </div>
    )
  }
}
export default AlbumGallary;
