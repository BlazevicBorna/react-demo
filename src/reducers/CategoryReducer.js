import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function categoryReduce(state = initialState.categories, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories
        default:
            return state;
    }
}