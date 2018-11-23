import React, { Component } from "react";

export class Button extends Component {
  style = {};
  state = { count: 0 };

  onClick = () =>
    this.setState({
      count: this.state.count + 1
    });

  render() {
    const { count } = this.state;
    const { onClick, style } = this;
    return <button {...{ onClick, style }}>Clicks: {count}</button>;
  }
}
