import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render(props) {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" storeId={props.match.params.storeId} />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
