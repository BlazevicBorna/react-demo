import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function assetReducer(state = initialState.assets, action) {
    switch (action.type) {
        case types.CREATE_ASSET_SUCCESS:
            return [...state, Object.assign({}, action.asset)];
        case types.UPDATE_ASSET_SUCCESS:
            return [...state.filter(asset => asset.id !== action.asset.id), Object.assign({}, action.asset)];
        case types.LOAD_ASSETS_SUCCESS:
            return action.assets;
        case types.DELETE_ASSET_SUCCESS:
            return [...state.filter(asset => asset.id !== action.assetId)];
        default:
            return state;
    }
}