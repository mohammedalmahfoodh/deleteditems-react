import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="mt-4 ml-3">
        <span>{this.state.count}</span>
        <button className="btn btn-primary ml-3">Test</button>
        <h3>{this.checkCount()}</h3>
      </div>
    );
  }
  checkCount() {
    return this.state.count > 0 ? "Greate than zero" : <button>zero</button>;
  }
}
export default Counter;
