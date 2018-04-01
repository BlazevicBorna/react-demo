import * as types from './ActionTypes';
import assetApi from '../api/mockAssetApi';

export function createAssetSuccess(asset) {
    return { type: types.CREATE_ASSET_SUCCESS, asset };
}
export function updateAssetSuccess(asset) {
    return { type: types.UPDATE_ASSET_SUCCESS, asset };
}
export function loadAssetsSuccess(assets) {
    return { type: types.LOAD_ASSETS_SUCCESS, assets };
}
export function deleteAssetSuccess(assetId) {
    return { type: types.DELETE_ASSET_SUCCESS, assetId };
}

export function loadAssets() {
    return function (dispatch) {
        return assetApi.getAllAssets().then((assets) => {
            dispatch(loadAssetsSuccess(assets));
        }).catch(error => { throw (error); });
    };
}

export function createAsset(asset) {
    
    return function (dispatch) {
        return assetApi.saveAsset(asset).then((savedAsset, updateCheck) => {
            updateCheck ? dispatch(createAssetSuccess(savedAsset)) : dispatch(updateAssetSuccess(savedAsset));

        }).catch(error => { throw (error); });
    };
}

export function deleteAssetById(assetId) {
    return function (dispatch) {
        return assetApi.deleteAsset(assetId).then(() => {
            dispatch(deleteAssetSuccess(assetId));
        }).catch(error => { throw (error); });
    };
}