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

  render() {
    const fishes = this.state.fishes;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(fishes).map(key => {
              return <Fish key={key} details={fishes[key]} />;
            })}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadFishSamples={this.loadFishSamples}
        />
      </div>
    );
  }
}

export default App;
