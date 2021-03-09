import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.map(review => {
    return this.props.restaurant.id === review.restaurantId ? 
      <Review 
        key={review.id} 
        review={review} 
        deleteReview={this.props.deleteReview} 
        editReview={this.props.editReview} 
      />
      :
      null
  })
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;