import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      romanInput: ""
    };
  }

  // Include numbers in input field
  addToInput = value => {
    this.setState({ input: this.state.input + value });
  };

  // if this.state.input isn't empty, then add zero
  addZeroToInput = value => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + value });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  // Add function
  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  // Subtraction
  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "minus";
  };

  // Multiplication
  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  // Division
  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  // Equal function
  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: Math.ceil(
          parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        )
      });
    }
  };

  arabicToRoman = value => {
    let roman = "";
    const romanNumList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XV: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let a;
    if (value < 1 || value > 3999)
      return <span style={{ fontWeight: "lighter" }}>Roman numbers</span>;
    else {
      for (let key in romanNumList) {
        a = Math.floor(value / romanNumList[key]);
        if (a >= 0) {
          for (let i = 0; i < a; i++) {
            roman += key;
          }
        }
        value = value % romanNumList[key];
      }
    }
    return roman;
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <h1>Roman number calculator</h1>
          </div>
          <div className="row">
            <Input>
              {!this.state.input && (
                <span style={{ fontWeight: "lighter" }}>Arabic numbers</span>
              )}
              {this.state.input}
            </Input>
          </div>
          <div className="row">
            <Input>{this.arabicToRoman(this.state.input)}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <ClearButton handleClear={this.clearInput}>C</ClearButton>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
