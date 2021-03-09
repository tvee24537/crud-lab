import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = { text: '' }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Add Restaurant: </label>
          <input 
            type="text" 
            name="text" 
            onChange={this.onInputSubmit} 
            value={this.state.text}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  onInputSubmit = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value  
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
};

export default RestaurantInput;