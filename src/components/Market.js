import React, { Component } from "react";

class Market extends Component {
  constructor() {
    super();
    console.log("%cMARKET constructor", "color:green;");
    this.state = {
      marketTrend: 0
    };
  }

  changeMarket = () => {
    this.setState(prevState => {
      let change = Math.random().toFixed(2)*5;
      if (Math.random() > 0.5) {
        change *= -1;
      }
      return {
        marketTrend: (
          parseFloat(prevState.marketTrend) + parseFloat(change)
        ).toFixed(2)
      };
    });
  };

  render() {
    return (
      <div
        className={`container ${
          this.state.marketTrend >= 0 ? "positive" : "negative"
        }`}
      >
        <h2 onClick={this.changeMarket}>STOCK TICKER</h2>
        <h5>
          Stocks are {this.state.marketTrend >= 0 ? "rising" : "dropping"} by{" "}
          {this.state.marketTrend}%
        </h5>
      </div>
    );
  }
}

export default Market;
