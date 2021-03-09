import React, { Component } from 'react';

class ReviewInput extends Component {
  state = { text: '' }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Add Review: </label>
          <input 
            type="text" 
            name="text"
            onChange={this.onInputChange}
            value={this.state.text}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId })
    this.setState({ 
      text: ''  
    })
  }

};

export default ReviewInput;