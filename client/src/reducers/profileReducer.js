import { GET_PROFILE, 
    GET_PROFILES,
     PROFILE_LOADING,
      CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false // init false, whilst fetching profiles to be true
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                ...state, // current state
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
                // isAuthenticated: false // added isAuthenticated: false
            };
        default:
            return state;
    }
}