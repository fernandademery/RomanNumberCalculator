import React, { Component } from "react";
import "./Style.css";

class Button extends Component {
  isOperator = value => {
    return !isNaN(value) || value === "." || value === "=" || value === "C";
  };
  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
