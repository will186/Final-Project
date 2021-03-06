import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const Searchbar = ({ handleSubmit, onSubmit, placeholder }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <Field
          className="form-control"
          name="searchText"
          component="input"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
}

export default reduxForm({
  form: 'search'
})(Searchbar);
