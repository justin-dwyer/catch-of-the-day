import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <div className="single-fish">
        <span role="img" aria-label="puffer fish">🐡</span>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.price}
        </div>
        <div>
          {this.props.status}
        </div>
        <div>
          {this.props.description}
        </div>
        image
      </div>
    )
  }
}

export default Fish;
