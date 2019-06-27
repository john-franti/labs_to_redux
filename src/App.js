import React, { Component } from "react";
import Welcome from "./components/Welcome";
import { Response } from "./components/Response";
import Hobbit from "./components/Hobbit";
import { Hobbits } from "./assets/Hobbits";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showResponse: false,
      shire: Hobbits
    };
  }
  sayHi = () => {
    let newShire = this.state.shire;
    newShire.push({
      name: "Gandalf",
      age: 2019,
      personality: "noice"
    });
    this.setState(Object.assign({}, { showResponse: true }, { newShire }));
  };
  render() {
    return (
      <div id="welcome">
        <Welcome clickAction={this.sayHi} guest="Mr. Frodo" />
        <hr />
        {this.state.showResponse ? <Response /> : null}
        {this.state.shire.map((hobbit, index) => {
          return <Hobbit hobbit={hobbit} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
