import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {reduxForm} from 'redux-form';
import {renderRadioGroup, renderInputField} from '../render-field';

import './question-form.css';

export const Question = ({
                    headline,
                    question_type,
                    choices,
                    identifier,
                    handleSubmit,
                    submitting,
                    actions,
                    multiline
                  }) => (
  <form onSubmit={handleSubmit}>
    <TransitionGroup>
      <CSSTransition
        key={identifier}
        timeout={600}
        classNames="fade"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className="question-container">
          {(() => {
            switch (question_type) {
              case 'multiple-choice':
                return renderRadioGroup({
                  label: headline,
                  name: identifier,
                  options: choices
                });
              case 'text':
                return renderInputField({
                  label: headline,
                  name: identifier,
                  textarea: JSON.parse(multiline),
                  rows: 5,
                  autoFocus: true,
                });
              default:
                return null;
            }
          })()}
        </div>
      </CSSTransition>
    </TransitionGroup>
    <hr/>
    <Row end="xs">
      {
        React
          .Children
          .map(actions, child =>
            React.cloneElement(child, {disabled: child.props.disabled || submitting})
          )}
    </Row>
  </form>
);

Question.propTypes = {
  headline: PropTypes.string.isRequired,
  question_type: PropTypes.string.isRequired,
  choices: PropTypes.array,
  identifier: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  actions: PropTypes.array,
  multiline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Question.defaultProps = {
  choices: [],
  actions: [],
  multiline: false
};

export default reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
})(Question);
