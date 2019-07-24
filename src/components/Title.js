import React, { Component, Fragment } from "react";

class Title extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleTitleClick = e => {
    e.preventDefault();
    console.log(e);
    // console.log("you clicked me");
    this.props.onClickTitle(this.state.input);
  };

  handleChangeInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <h1>Hello from {this.props.name} at App Component</h1>
        <form onSubmit={this.handleTitleClick}>
          <input
            type="text"
            onChange={this.handleChangeInput}
            value={this.state.input}
          />
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default Title;
