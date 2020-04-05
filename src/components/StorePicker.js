import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Choose a Store Name</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;