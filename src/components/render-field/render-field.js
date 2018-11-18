import React from 'react';
import { Field } from 'redux-form';

const styles = {
  radioLabel: {
    cursor: 'pointer',
  }
};

export const renderRadioGroup = ({ label, options, name}) => (
  <div>
    <h4>{label}</h4>
    {
      options.map((option, key) => (
        <React.Fragment key={key}>
          <label style={styles.radioLabel}>
            <Field
              name={name}
              component="input"
              type="radio"
              value={option.value}
            />{' '}
            {option.label}
          </label>
          <br/>
        </React.Fragment>
      ))
    }
  </div>
);

export const renderInputField = ({ label, name, textarea=false, ...rest }) => (
  <div>
    <h4>{label}</h4>
    <Field
      name={name}
      component={ textarea ? 'textarea' : 'input'}
      type="text"
      {...rest}
    />
  </div>
);
