import * as types from './ActionTypes';
import categoryApi from '../api/mockCategoryApi';

export function loadCategoriesSuccess(categories) {
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
    return function (dispatch) {
        return categoryApi.getAllCategories().then((categories) => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => { throw (error); });
    };
}