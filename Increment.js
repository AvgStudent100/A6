import React, { Component } from "react";
import './inc.css';

class Increament extends Component {
  state = {
    inputvalue: 0,
    count: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleIncrement = () => {
    this.setState({
      count: Number (this.state.count) + Number (this.state.inputvalue),
    });
  };
  handleDecrement = () => {
    this.setState({
      count: Number (this.state.count) - Number (this.state.inputvalue),
    });
  };
  render() {
    return (
      <div class="increment">
        <label>Count : </label>
        <span> {this.state.count} </span>
        <div class="num">
          <input
            type="number"
            class="input"
            name="inputvalue"
            aria-label="default input example"
            value={this.state.inputvalue}
            onChange={this.handleChange}
          ></input>
        </div>

        <button class="btn btn-primary btn-sm" onClick={this.handleIncrement}>
          Increament
        </button>
        <button class="btn btn-warning btn-sm" onClick={this.handleDecrement}>
          Decreament
        </button>
      </div>
    );
  }
}

export default Increament
