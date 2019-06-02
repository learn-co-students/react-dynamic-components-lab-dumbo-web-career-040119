import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this)
    const oldValue = this.props.opacity
    const newValue = this.props.opacity - 0.1
    if (this.props.opacity >= 0.2) {
    return (
      <div className="color-box" style={{opacity: oldValue}}>
        <ColorBox opacity={newValue}/>
      </div>
    )
  }else{
    return null;
  }
  }

}
