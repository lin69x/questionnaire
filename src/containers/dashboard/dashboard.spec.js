import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Dashboard} from './dashboard';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = {
  app: {
    name: 'Test Name',
    description: 'Test Description',
    questions: [],
    currentQuestionIdx: 0,
  },
};

describe('<Dashboard/>', () => {
  it('should match snapshot', () => {
    const renderedValue = renderer.create(<Dashboard { ...props }/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
