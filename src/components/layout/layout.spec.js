import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Layout from './layout';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = {
  children: "test child",
};

describe('<Card/>', () => {
  it('should match snapshot', () => {
    const renderedValue = renderer.create(<Layout { ...props }/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
