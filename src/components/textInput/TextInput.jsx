import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
    name,
    placeholder,
    value,
    label,
    type,
    onChange,
    required,
    pattern
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
                required={required}
                pattern={pattern}
                className="form-control form-control-lg"
            />
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    pattern: null
}

export default TextInput;
