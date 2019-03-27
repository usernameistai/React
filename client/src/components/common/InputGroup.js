import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
    name, // properties of the function
    placeholder, // properties of the function
    value, // properties of the function
    label, // etc
    error,
    icon,
    type,
    onChange
}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon} />
                </span>
            </div>
            <textareainput 
                type={type} // whatever type property is passed in insetad of "email"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error // errors.email
                    })}
                placeholder={placeholder}  // placeholder prop
                name={name} // name prop 
                value={value} // value prop 
                onChange={onChange} // onCHange prop
            />
            {error && <div className="invalid-feedback">{error}</div> }
        </div>
    ); // in above errors.email replaced with error
};

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
    type: 'text'
};

export default InputGroup;