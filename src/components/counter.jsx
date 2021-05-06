import React, { Component } from "react";

class Counter extends Component {
  render() {
    this.getBadgeClasses();
    return (
      <div>
        <span>{this.props.counter.item}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fa fa-pencil" aria-hidden="true" />
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </button>
        <button
          disabled={this.props.counter.value === 0}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fa fa-minus-circle" aria-hidden="true" />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
