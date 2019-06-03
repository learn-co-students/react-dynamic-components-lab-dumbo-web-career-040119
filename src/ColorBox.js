import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacity = Math.round( this.props.opacity * 10 ) / 10
    let newOpacity = opacity-0.1
    console.log(opacity)

    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return (null)
    }
  }

}
