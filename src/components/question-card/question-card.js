import React from 'react';
import {connect} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Field, reduxForm} from 'redux-form';

import './test.css';

const renderRadioGroup = (name, options) => (
  <div>
    {
      options.map((option, key) => (
        <React.Fragment key={key}>
          <label>
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

const QuestionCard = ({
                        headline,
                        question_type,
                        choices,
                        identifier,
                        handleSubmit,
                        onSubmit,
                        submitting,
                        actions,
                        slideDir,
                      }) => (
  <form onSubmit={handleSubmit}>
    <TransitionGroup>
      <CSSTransition
        key={identifier}
        timeout={600}
        classNames={slideDir}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div style={{ height: 300 }}>
          <h4>{headline}</h4>
          {(() => {
            switch (question_type) {
              case 'multiple-choice':
                return renderRadioGroup(identifier, choices);
              default:
                return null;
            }
          })()}
        </div>
      </CSSTransition>
    </TransitionGroup>
    <div>
      {actions}
    </div>
  </form>
);

const mapStateToProps = (state) => ({
  slideDir: state.app.slideDir,
});

export default connect(mapStateToProps, null)(reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(QuestionCard));
