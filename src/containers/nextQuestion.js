import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestion } from '../actions/questions';

class NextQuestion extends Component {
  constructor(props) {
    super(props);
  }

nextQuestion() {
//ToDo: To add a functionality for a non repeating random question
  // let length = this.props.questions.length,
  //     index = Math.floor(Math.random() * length);
  return this.props.questions[0].question;
}
  render() {
    return(
      <div>
      <h2>{this.nextQuestion()}</h2>
      </div>	
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }  
};

export default connect(mapStateToProps, null)(NextQuestion);