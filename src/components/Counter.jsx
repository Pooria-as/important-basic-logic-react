import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { id, counter, onIncress, onDelete, onDecress, onLike } = this.props;
    return (
      <div key={id}>
        {counter.value === 0 ? (
          <span className="badge bg-warning m-3">Zero</span>
        ) : (
          <span className="badge bg-success m-3">{counter.value}</span>
        )}
        <button className="btn btn-primary" onClick={() => onIncress(counter)}>
          +
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onDecress(counter)}
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button className="btn btn-danger m-2" onClick={() => onDelete(id)}>
          Delete
        </button>

        <button className="btn btn-success m-2" onClick={() => onLike(id)}>
          Like {counter.Like ? "❤" : ""}
        </button>
      </div>
    );
  }
}

export default Counter;
