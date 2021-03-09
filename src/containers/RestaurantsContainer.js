import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants 
          restaurants={this.props.restaurants} 
          deleteRestaurant={this.props.deleteRestaurant} 
          editRestaurant={this.props.editRestaurant}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id }), 
    editRestaurant: restaurant => dispatch({ type: 'EDIT_RESTAURANT', restaurant })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)