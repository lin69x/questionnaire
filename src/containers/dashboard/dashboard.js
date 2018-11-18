import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'react-flexbox-grid';
import Layout from '../../components/layout';
import QuestionForm from '../../components/question-form';
import Message from '../../components/message';
import Card from '../../components/card';
import {AppActions} from '../../actions';

const Dashboard = ({
 app: {name, description, questions, currentQuestionIdx},
 prevQuestion,
 nextQuestion,
}) => (
  <Layout>
    <Row center='md'>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </Row>
    <Row>
      <Col md={8} mdOffset={2}>
        <Card>
          {(() => {
            if(currentQuestionIdx >= questions.length)
              return <Message message='Thank You!' />;

            return <QuestionForm
              {...questions[currentQuestionIdx]}
              actions={[
                <button
                  type="button"
                  key='btn-prev'
                  className="custom-btn"
                  onClick={prevQuestion}
                  disabled={currentQuestionIdx === 0}
                >
                  Previous
                </button>,
                <button
                  type="submit"
                  key='btn-next'
                  className="custom-btn"
                  disabled={currentQuestionIdx === questions.length}
                >
                  {currentQuestionIdx < questions.length - 1 ? 'Next' : 'Finish'}
                </button>
              ]}
              onSubmit={nextQuestion}
            />
          })()}
        </Card>
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
