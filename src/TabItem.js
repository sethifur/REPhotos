import React, { Component } from 'react';

class TabItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:props
    };
  }

  render(){
    return(
      <div>
        <button onclick="" id="button">{this.state.title}</button>
      </div>
    )
  }
}
export default TabItem;
