import React, { Component } from 'react'

export default class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
          on: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState((prevState) => ({
            on: !prevState.on,
          }));
      }
    
  render() {
    return (
      <div>
<img
          src={ this.state.on
            ?"/star_on.png"
            :"/star_off.png" }
          onClick={this.handleClick}
          alt="star"
        />
      </div>
    )
  }
}
