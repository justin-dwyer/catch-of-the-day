import React from 'react';

class EditFishFrom extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
  }
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange}/>
        <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange}/>
        <select type="text" name="status" value={this.props.fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="description" value={this.props.fish.description} onChange={this.handleChange}/>
        <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default EditFishFrom;
