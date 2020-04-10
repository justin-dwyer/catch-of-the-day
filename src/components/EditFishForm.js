import React from 'react';

class EditFishFrom extends React.Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log(updatedFish);
    const key = this.props.index;
    this.props.updateFish(key, updatedFish);
    // const fish = event.currentTarget;
    // this.props.updateFish(fish, index);
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
