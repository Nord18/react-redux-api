import React from 'react';
import PropTypes from 'prop-types';

function AcademiesList(props) {
  const academies = props.academies
  const academiesItems = academies.map((item, index) =>
    <li key={item._id} className="list-group-item">{index+1}. {item.title}</li>
  )
  return (
    <ul className="list-group">{academiesItems}</ul>
  )
}

AcademiesList.propTypes = {
  academies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AcademiesList