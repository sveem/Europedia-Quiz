import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextQuestion } from '../actions/questions';
import trueOrFalse from '../actions/answers'

class NextQuestion extends Component {
  constructor(props) {
    super(props);
  }

currentQuestion() {
  return this.props.questions[0].question;
}

currentAnswer() {
let answers = this.props.questions[0].answer;
let status;
  return answers.map((el, idx) => {
    if(el.score) {
      status = el.score
    }
    return (
    <li 
    key={idx}
    //onClick not finished yet
    onClick={() => this.props.trueOrFalse(status)}> 
    {el.city}
    </li>
   ); 
 });
}
  render() {
    return(
      <div>
      <h2>{this.currentQuestion()}</h2>
      <div>{this.currentAnswer()}</div>
      </div>	
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }  
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { trueOrFalse: trueOrFalse}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestion);