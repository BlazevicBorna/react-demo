import React, { PropTypes } from 'react';
import AssetListRow from './AssetListRow';

const AssetList = ({ assets,deleteAsset }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Bat-Name</th>
                    <th scope="col">Bat-Category</th>
                    <th scope="col">Bat-Quantity</th>
                </tr>
            </thead>
            <tbody>
                {assets.map(asset =>
                    <AssetListRow key={asset.id} asset={asset} deleteAsset={deleteAsset} />)}
            </tbody>
        </table>
    );
};

AssetList.propTypes = {
    assets: PropTypes.array.isRequired,
    deleteAsset: PropTypes.func.isRequired
};

export default AssetList;