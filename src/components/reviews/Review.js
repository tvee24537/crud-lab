import React, { Component } from 'react';

class Review extends Component {
  state = { text: '', isEditing: false }
  
  render() {
    const { review } = this.props

    return (
      <div>
        { !this.state.isEditing ?
          <li>
            {review.text}
            <button onClick={this.onEditClick}>Edit</button>
            <button onClick={() => this.props.deleteReview(review.id)}>Delete</button>
          </li>
          :
          <form onSubmit={this.onFormSubmit}>
            <label>Edit Review: </label>
            <input 
              type="text"
              onChange={this.onInputChange}
              value={this.state.text}
              placeholder={this.props.review.text}
            />
            <button>Submit</button>
          </form>
        }
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.editReview({ id: this.props.review.id, text: this.state.text })
    this.setState({ 
      text: '',
      isEditing: !this.state.isEditing  
    })
  }

  onEditClick = () => {
    this.setState(previousState => {
      return {
        isEditing: !previousState.isEditing
      }
    })
  }

};

export default Review;