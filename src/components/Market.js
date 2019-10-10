import React, { Component } from "react";

class Market extends Component {
  constructor() {
    super();
    console.log("%cFIRST CHILD constructor", "color:green;");
    this.state = {
      marketTrend: 1
    };
  }

  updateMyStocks = () => {
    this.props.onMarketUpdates(this.state.marketTrend);
  };

  calculateMarketTrend = () => {
    this.setState(() => {
      let nextValue = Math.random() * 10;
      if (Math.random() > 0.5) {
        nextValue *= -1;
      }
      return { marketTrend: nextValue.toFixed(2) };
    });
  };

  startTrading = () => setInterval(() => {
    this.calculateMarketTrend();
    this.updateMyStocks();
  }, 1000);

  componentDidMount = () => {
    this.startTrading()
  }

  componentWillUnmount = () => {
    clearInterval(this.startTrading);
  }

  render() {
    return (
      <div
        className={`container ${
          this.state.marketTrend >= 0 ? "positive" : "negative"
        }`}
      >
        <h2>STOCK TICKER</h2>
        <h5>Stocks are about to change by {this.state.marketTrend}%</h5>
      </div>
    );
  }
}

export default Market;
