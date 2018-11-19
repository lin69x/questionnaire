import React from 'react';
import Enzyme  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {createStore } from 'redux';
import Question from './question-form';

Enzyme.configure({adapter: new EnzymeAdapter()});

const props = {
  headline: 'Headline',
  question_type: 'multiple-choice',
  choices: [
    {
      label: 'option 1',
      value: 'option 1',
    },
    {
      label: 'option 2',
      value: 'option 2',
    }
  ],
  identifier: 'uniqueKey',
  handleSubmit: jest.fn(),
  actions: [
    <button type='submit' key={1}>Test Button</button>
  ],
  multiline: "false",
};

jest.mock('redux-form', () => ({
  Field: 'Field',
    reduxForm: () => component => component,
}));

describe('Question Form', () => {
  it('should match snapshot', () => {
    const renderedValue = renderer.create(<Question {...props}/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
