import React from 'react';


export const renderRadioGroup = ({ input, children, ...rest }) => (
  <FormControl>
    <RadioGroup
      { ...input }
      { ...rest }
      value={ input.value }
      onChange={ (event, value) => input.onChange(value) }
    >
      { children }
    </RadioGroup>
  </FormControl>
);
