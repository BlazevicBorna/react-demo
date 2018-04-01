import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import NumberInput from '../common/NumberInput';

const AssetForm = ({ categories, onSave, onChange, loading, errors }) => {
    
    return (
        <div>
            <TextInput
                name="name"
                label="Bat-Name"
                placeholder="Batarang"
                onChange={onChange}
                error={errors.name} />
            <SelectInput
                name="category"
                label="Bat-Category"
                defaultOption="Select Bat-Category"
                onChange={onChange}
                options={categories}
                error={errors.category} />
            <NumberInput
                name="quantity"
                label="Bat-Quantity"
                placeholder={2}
                onChange={onChange}
                error={errors.quantity} />
            <input
                type="sumbit"
                disabled={loading}
                defaultValue={loading ? 'Saving' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />
        </div>
    );
};

AssetForm.propTypes = {
    categories: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default AssetForm;