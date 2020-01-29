import React from 'react';
import CustomInput from '../components/UI/CustomInput'
import CustomBtn from '../components/UI/CustomBtn'
import PropTypes from 'prop-types';

function AppForm(props) {
  return (
    <form onSubmit={props.addAcademie} className="input-group col-md-4">
      <CustomInput title={props.title} handleTitle={props.handleTitle} fieldValidError={props.fieldValidError} />
      <CustomBtn />
      {props.fieldValidError &&
        <div className="invalid-feedback d-block">
          This field is required
        </div>
      }
    </form>
  )
}

AppForm.propTypes = {
  title: PropTypes.string.isRequired,
  fieldValidError: PropTypes.bool.isRequired,
  addAcademie: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired
};

export default AppForm