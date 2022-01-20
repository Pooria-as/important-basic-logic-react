import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 19, Like: false },
        { id: 2, value: 0, Like: false },
        { id: 3, value: 0, Like: false },
        { id: 4, value: 0, Like: false },
        { id: 5, value: 0, Like: false },
      ],
    };
  }

  Delete = (counterId) => {
    const DeleteRow = this.state.counters.filter(
      (item) => item.id !== counterId
    );
    this.setState({ counters: DeleteRow });
  };
  Reset = () => {
    const Rest = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ counters: Rest });
  };
  Incress = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  Decress = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  LikeDissLike = (id) => {
    const counters = [...this.state.counters]; 
    const action = counters.find(i=>i.id===id);
    action.Like=!action.Like
    this.setState({counters})
    console.log(counters)
  };

  render() {
    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter((t) => t.value > 0).length} />
        <Counters
          counters={this.state.counters}
          onIncress={this.Incress}
          onDelete={this.Delete}
          onReset={this.Reset}
          onDecress={this.Decress}
          onLike={this.LikeDissLike}
        />
      </React.Fragment>
    );
  }
}

export default App;
