import React, { Component } from "react";
import "./Style.css";

class ClearButton extends Component {
  render() {
    return (
      <div
        className="button clear-btn"
        style={{ backgroundColor: "#BFBFBF" }}
        onClick={() => this.props.handleClear()}
      >
        {" "}
        {this.props.children}{" "}
      </div>
    );
  }
}

export default ClearButton;
