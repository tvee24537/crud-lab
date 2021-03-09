import cuid from 'cuid';

export default function manageRestaurants(state = { 
    reviews: [], 
    restaurants: [] 
}, action ) {
    let idx 
    switch (action.type) {
        case 'ADD_RESTAURANT':
            console.log('add restaurant', action)
            return { 
                ...state,
                reviews: [ ...state.reviews ], 
                restaurants: [ ...state.restaurants, { id: cuid(), text: action.text } ] 
            }
        case 'DELETE_RESTAURANT':
            console.log('delete restaurant', action)
            return { 
                ...state, 
                reviews: [ ...state.reviews ],
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }
        case 'EDIT_RESTAURANT':
            console.log('edit restaurant', action)
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.restaurant.id)
            let restaurant = state.restaurants.find(restaurant => restaurant.id === action.restaurant.id)
            return {
                ...state, 
                reviews: [ ...state.reviews ],
                restaurants: [ 
                    ...state.restaurants.slice(0, idx), 
                    { ...restaurant, text: action.restaurant.text }, 
                    ...state.restaurants.slice(idx + 1)
                ]
            } 
        case 'ADD_REVIEW':
            console.log('add review', action);
            return { 
                ...state, 
                restaurants: [ ...state.restaurants ],
                reviews: [...state.reviews, { id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId } ]
            }
        case 'DELETE_REVIEW':
            console.log('delete review', action);
            return {
                ...state, 
                restaurants: [ ...state.restaurants ],
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
        case 'EDIT_REVIEW':
            console.log('edit review', action)
            idx = state.reviews.findIndex(review => review.id === action.review.id)
            let review = state.reviews.find(review => review.id === action.review.id)
            return {
                ...state, 
                restaurants: [ ...state.restaurants ],
                reviews: [
                    ...state.reviews.slice(0, idx), 
                    { ...review, text: action.review.text },
                    ...state.reviews.slice(idx + 1)
                ]
            }
        default:
            return state
    }
} 