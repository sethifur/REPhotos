import React, { Component } from 'react';
import TabItem from './TabItem.js';
import "./TabHolder.css";

class TabHolder extends Component {
  constructor() {
    super();
    this.state = {
      tabs:["Home","Photography","Design","ContactMe"]
    };
  }

  render(){
    return(
      <div className="TabDiv">
        <button className="TabButton">Home</button>
        <button className="TabButton">Photography</button>
        <button className="TabButton">Design</button>
        <button className="TabButton">Contact Me</button>
      </div>
    )
  }
}
export default TabHolder;
