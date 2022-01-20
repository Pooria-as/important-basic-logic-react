import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {onReset,onIncress,onDelete,counters,onDecress,onLike}=this.props
    return (
      <>
        <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            counter={item}
            onIncress={onIncress}
            onDelete={onDelete}
            onDecress={onDecress}
            onLike={onLike}
          />
        ))}
      </>
    );
  }
}

export default Counters;
