import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case POST_LOADING:
          return {
            ...state,
            loading: true
          };
        case GET_POSTS:
          return {
            ...state,
            posts: action.payload,
            loading: false
          };
        case GET_POST:
          return {
            ...state,
            post: action.payload, // pass entire post in as payload, response from back end
            loading: false
          };
        case ADD_POST:
          return {
            ...state,
            posts: [action.payload, ...state.posts] // current posts of state.posts
          };
        case DELETE_POST:
          return {
            ...state, // initial state
            posts: state.posts.filter(post => post._id !== action.payload) // posts array
          };
        default: 
            return state;
    }
}