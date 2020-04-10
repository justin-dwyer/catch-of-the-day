import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    // Make sure fish loads from firebase storage so localStorage doesn't eff things up
    if(!fish) return <li key={key}>
      Sorry, this fish is no longer available.
      <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
    </li>;
    if (!isAvailable) {
      return <li key={key}>
        Sorry, {fish ? fish.name : 'that fish'} is no longer available.
        <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
      </li>;
    }
    return (
      <li key={key}>
        {count} lbs. {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
      </li>
    );
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;
