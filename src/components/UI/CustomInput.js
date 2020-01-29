import React from 'react';
import PropTypes from 'prop-types';

function CustomInput(props) {
  return (
    <input value={props.title} onChange={props.handleTitle} type="text" className={`form-control mr-2 ${props.fieldValidError ? 'form-invalid' : ''}`} aria-label="Recipient's username" aria-describedby="button-addon2" />
  )
}

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  fieldValidError: PropTypes.bool.isRequired,
  handleTitle: PropTypes.func.isRequired
};

export default CustomInput