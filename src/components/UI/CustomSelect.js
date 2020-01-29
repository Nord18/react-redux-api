import React from 'react';
import PropTypes from 'prop-types';

function CustomSelect(props) {
  return (
    <div className="form-group mb-0">
      <select onChange={props.changeLimit} className="form-control">
        <option disabled>Change Limit</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
      </select>
    </div>
  )
}

CustomSelect.propTypes = {
  changeLimit: PropTypes.func.isRequired
};

export default CustomSelect