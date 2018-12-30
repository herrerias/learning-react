import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  loadFishSamples = () => {
    this.setState({ fishes });
  };

  addToOrder = key => {
    // 1. Take a copy of the existing state
    const order = { ...this.state.order };
    // 2. Add new order by key
    console.log(order[key]);
    order[key] = order[key] + 1 || 1;
    // 3. Set the new order object to state
    this.setState({ order });
  };

  render() {
    const fishes = this.state.fishes;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(fishes).map(key => {
              return (
                <Fish
                  key={key}
                  index={key}
                  details={fishes[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} />
        <Inventory
          addFish={this.addFish}
          loadFishSamples={this.loadFishSamples}
        />
      </div>
    );
  }
}

export default App;
