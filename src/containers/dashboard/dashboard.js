import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'react-flexbox-grid';

import Layout from '../../components/layout';
import QuestionCard from '../../components/question-card';
import {AppActions} from '../../actions';

const Dashboard = ({
 app: {name, description, questions, currentQuestionIdx},
 prevQuestion,
 nextQuestion,
}) => (
  <Layout>
    <Col md={10} mdOffset={1}>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </Col>
    <Row>
      <Col md={8} mdOffset={2}>
        <QuestionCard
          {...questions[currentQuestionIdx]}
          actions={[
            <button
              type="button"
              key='btn-prev'
              onClick={prevQuestion}
              disabled={currentQuestionIdx === 0}
            >
              Previous
            </button>,
            <button
              type="submit"
              key='btn-next'
            >
              {currentQuestionIdx === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          ]}
          onSubmit={nextQuestion}
        />
      </Col>
    </Row>
  </Layout>
);


const mapStateToProps = (state) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  nextQuestion: AppActions.nextQuestion,
  prevQuestion: AppActions.prevQuestion,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
