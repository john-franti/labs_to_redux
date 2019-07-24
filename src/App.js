import React, { Component } from "react";
import Greetings from "./components/Greetings";
import Title from './components/Title'

class App extends Component {

  state = {
    name: "John",
    friendsList: ["Zoe", "Nathan", "Bob", "Sarah"]
  }

  handleClickTitle = data => {
    this.setState({name:data})
  }


  render() {
    return (
      <div>
        <Title onClickTitle={this.handleClickTitle} name={this.state.name}/>
        {/* <h1 onClick={this.handleClickTitle}>Hello from {this.state.name} at App Component</h1> */}
        {this.state.friendsList.map((friend, index) => {
          return <Greetings key={index} friend={friend} />
        })}
      </div>
    );
  }
}

export default App;
