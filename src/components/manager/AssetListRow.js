import React, { PropTypes } from 'react';

const AssetListRow = ({ asset, deleteAsset }) => {
    return (

        <tr>
            <td>{asset.name}</td>
            <td>{asset.category}</td>
            <td>{asset.quantity}</td>
            <td id={asset.id} className="btn btn-danger" onClick={deleteAsset}>Remove</td>
        </tr>
    );
};

AssetListRow.propTypes = {
    asset: PropTypes.object.isRequired,
    deleteAsset: PropTypes.func.isRequired
};

export default AssetListRow;