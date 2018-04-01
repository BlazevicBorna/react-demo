import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetActions from '../../actions/AssetAction';
import AssetList from './AssetList';
import AssetForm from './AssetForm';

class ManagerPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            assets: [],
            errors: {},
            asset: { name: "", category: "", quantity: 0 },
            inputsTouched: { nameInput: false, quantityInput: false, categoryInput: false }
        };
        this.updateAssetState = this.updateAssetState.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.deleteAsset = this.deleteAsset.bind(this);

    }

    assetFormIsValid(checkForSave) {
        let formIsValid = true;
        let errors = {};

        if (this.state.asset.name.length < 3 && (this.state.inputsTouched.nameInput || checkForSave)) {
            errors.name = "Asset name must be at least 3 characters long.";
            formIsValid = false;
        }
        const quantity = Number.parseInt(this.state.asset.quantity);
        if ((quantity <= 0 || this.state.asset.quantity.length == 0) && (this.state.inputsTouched.quantityInput || checkForSave)) {
            errors.quantity = "Asset must be added in a quantity greater than 0.";
            formIsValid = false;
        }

        if ((this.state.asset.category == 'Select Bat-Category' || this.state.asset.category == '') && (this.state.inputsTouched.categoryInput || checkForSave)) {
            errors.category = 'Asset category must be selected.';
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    deleteAsset(event) {
        this.props.actions.deleteAssetById(event.target.id);
    }

    updateAssetState(event) {
        const field = event.target.name;
        let inputsTouched=this.state.inputsTouched;
        inputsTouched[field + 'Input']=true;
        this.setState({inputsTouched:inputsTouched});
        let asset = this.state.asset;
        asset[field] = event.target.value;
        this.setState({ asset: asset, inputsTouched: this.state.inputsTouched });
        this.assetFormIsValid(false);
    }

    onClickSave() {
        if (!this.assetFormIsValid(true)) {
            this.setState({ inputsTouched: { textInput: true, categoryInput: true, quantityInput: true } });
            return;
        }
        this.props.actions.createAsset(this.state.asset);
    }

    assetRow(asset, index) {
        return <div key={index} >{asset.name}</div>;
    }

    render() {
        return (
            <div>
                <h1>Bat-assets</h1>
                <AssetList assets={this.props.assets} deleteAsset={this.deleteAsset} />
                <h2>Add a Bat-asset</h2>
                <AssetForm
                    errors={this.state.errors}
                    categories={this.props.categories}
                    onChange={this.updateAssetState}
                    onSave={this.onClickSave} />
            </div>
        );
    }
}

ManagerPage.propTypes = {
    actions: PropTypes.object.isRequired,
    assets: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(assetActions, dispatch)
    };

}
function mapStateToProps(state, ownProps) {
    const categoriesFormattedForDropdown = state.categories.map(category => {
        return {
            value: category.id,
            text: category.name
        };
    });
    return {
        assets: state.assets,
        categories: categoriesFormattedForDropdown
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerPage);
