import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {reduxForm} from 'redux-form';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderRadioGroup, renderInputField} from './render-field';

Enzyme.configure({adapter: new EnzymeAdapter()});

const spy = jest.fn();
const store = createStore(() => ({}));

describe('render radio group', () => {
  it('RADIO GROUP should match snapshot', () => {
    const radioForm = () => (
      <form>
        {
          renderRadioGroup({
            label: "Radio Group",
            name: 'testRadio',
            options: [
              {
                label: 'option 1',
                value: 'option 1',
              },
              {
                label: 'option 2',
                value: 'option 2',
              }
            ]
          })
        }
      </form>
    );

    const Decorated = reduxForm({form: 'testRadioForm'})(radioForm);

    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Decorated
            handleSubmit={spy}
            submitting={false}
            submit={spy}
          />
        </Provider>
      ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('INPUT FIELD should match snapshot', () => {
    const inputForm = () => (
      <form>
        {
          renderInputField({
            label: 'input field',
            name: 'testInput'
          })
        }
      </form>
    );

    const Decorated = reduxForm({form: 'testInputForm'})(inputForm);

    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Decorated
            handleSubmit={spy}
            submitting={false}
            submit={spy}
          />
        </Provider>
      ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('TEXTAREA should match snapshot', () => {
    const textAreaForm = () => (
      <form>
        {
          renderInputField({
            label: 'input field',
            name: 'testInput',
            textarea: true,
          })
        }
      </form>
    );

    const Decorated = reduxForm({form: 'testTextAreaForm'})(textAreaForm);

    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Decorated
            handleSubmit={spy}
            submitting={false}
            submit={spy}
          />
        </Provider>
      ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
