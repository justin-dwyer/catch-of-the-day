import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop form from submitting
    event.preventDefault();
    // 2. get text from input
    const storeName = this.myInput.current.value;
    // 3. change page to /store/input
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Choose a Store Name</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store =></button>
      </form>
    )
  }
}

export default StorePicker;
