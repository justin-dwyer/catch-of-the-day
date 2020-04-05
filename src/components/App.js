import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // The below methods won't work in React
    // Use the React setState API
    // You don't want to reach into state and modify it directly (called a mutation)
    this.state.fishes.push(fish);
    this.state.fishes.fish1 = fish;
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" storeId={this.props.match.params.storeId} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
