import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button className="btn btn-primary ml-3">Test</button>
      </div>
    );
  }
}
export default Counter;
