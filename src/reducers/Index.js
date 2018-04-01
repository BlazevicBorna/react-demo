import { combineReducers } from 'redux';
import assets from './AssetReducer';
import categories from './CategoryReducer';

const rootReducer = combineReducers({
    assets,
    categories
});

export default rootReducer;