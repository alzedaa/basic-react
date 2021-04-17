import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm m-2 btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let badge = "badge btn-sm m-3 badge-";
    badge += this.props.counter.value === 0 ? "warning" : "primary";
    return badge;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
