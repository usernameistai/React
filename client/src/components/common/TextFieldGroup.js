import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name, // properties of the function
    placeholder, // properties of the function
    value, // properties of the function
    label, // etc
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group">
            <input 
                type={type} // whatever type property is passed in insetad of "email"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error // errors.email
                    })}
                placeholder={placeholder}  // placeholder prop
                name={name} // name prop 
                value={value} // value prop 
                onChange={onChange} // onCHange prop
                disabled={disabled} // disabled property
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div> }
        </div>
    ); // in above errors.email replaced with error
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;