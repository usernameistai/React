import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name, // properties of the function
    placeholder, // properties of the function
    value, // properties of the function
    error,
    info,
    onChange
}) => {
    return (
        <div className="form-group">
            <textarea
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error // errors.email
                    })}
                placeholder={placeholder}  // placeholder prop
                name={name} // name prop 
                value={value} // value prop 
                onChange={onChange} // onCHange prop
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div> }
        </div>
    ); // in above errors.email replaced with error
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default TextAreaFieldGroup;