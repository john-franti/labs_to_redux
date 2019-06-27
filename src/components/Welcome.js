import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Welcome extends Component {

  handleClick = () => {
    this.props.clickAction();
  }

  render() {
    return (
      <div>
        <h1>Why Hello, {this.props.guest}</h1>
        <Button className="btn-danger" onClick={this.handleClick}>
          Hello Sam
        </Button>
      </div>
    );
  }
}

export default Welcome;
