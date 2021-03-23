import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//npm install redux-form --legacy-peer-deps
class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    return (
      // <input
      //   value={input.value}
      //   onChange={input.onChange}
      // /> or
      <div className={`field ${meta.touched && meta.error ? 'error' : null}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.touched && meta.error ? (
          <div className="ui error message">
            <div className="header">{meta.error}</div>
          </div>
        ) : null}
      </div>
    );
  }
  onSubmit(formValues) {
    if (Object.keys(formValues).length === 0) {
      return;
    }
    console.log(formValues);
  }
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};
export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
