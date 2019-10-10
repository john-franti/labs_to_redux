import React, { Component } from "react";
import "./App.css";
import Market from "./components/Market";

class App extends Component {
  constructor() {
    super();
    console.log("%cAPP constructor", "color:red;");
    this.state = {
      account: 25.00,
      stocks: 0.00,
      tradingOpen: false
    };
  }

  buyStock = () => {
    if (this.state.account >= 5) {
      this.setState(prevState => {
        return {
          account: prevState.account - 5,
          stocks: prevState.stocks + 5
        };
      });
    }
  };

  sellStock = () => {
    if (this.state.stocks >= 5) {
      this.setState(prevState => {
        return {
          account: prevState.account + 5,
          stocks: prevState.stocks - 5
        };
      });
    }
  };

  openTrading = () => {
    this.setState({ tradingOpen: !this.state.tradingOpen });
  };

  render() {
    return (
      <div className="container app">
        <h1>Stock Tracker</h1>
        <div>
          <h4>
            My account contains{" "}
            <span className="method-name">${this.state.account}</span>
          </h4>

          <h4>
            My stocks are worth{" "}
            <span className="method-name">${this.state.stocks}</span>
          </h4>
          <button className="btn btn-info" onClick={this.buyStock}>
            Buy Stocks ($5)
          </button>
          <br />
          <button className="btn btn-danger" onClick={this.sellStock}>
            Sell Stocks ($5)
          </button>
          <hr />
          <button className="btn btn-warning" onClick={this.openTrading}>
            Open/Close Markets
          </button>
        </div>
        <hr />
        {this.state.tradingOpen ? (
          <Market parentState={this.state} onMarketUpdates={this.computeStockChange}/>
        ) : null}
      </div>
    );
  }
}

export default App;
