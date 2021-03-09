import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          addReview={this.props.addReview} 
          restaurantId={this.props.restaurant.id} 
        />
        <Reviews 
          reviews={this.props.reviews} 
          restaurant={this.props.restaurant} 
          deleteReview={this.props.deleteReview} 
          editReview={this.props.editReview} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }), 
    deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id}), 
    editReview: review => dispatch({ type: 'EDIT_REVIEW', review })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)