import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5, item: "tomato" },
      { id: 2, value: 0, item: "onion" },
      { id: 3, value: 0, item: "lettuce" },
      { id: 4, value: 0, item: "carrot" },
      { id: 5, value: 5, item: "orange" },
      { id: 6, value: 0, item: "apple" },
      { id: 7, value: 0, item: "lettuce" },
      { id: 8, value: 0, item: "carrot" },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () => {};

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="container d-flex h-100 w-100">
          <div className="card text-white bg-dark w-100 p-3 text-center">
            <div className="card-header">My Cart</div>
            <div className="card-body">
              <main className="Container">
                <Counters
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
