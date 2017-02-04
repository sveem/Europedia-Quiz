import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestion } from '../actions/questions';

class NextQuestion extends Component {
  constructor(props) {
    super(props);
  }



currentQuestion() {
  let i = 0;
  return this.props.questions[0].question;
}

currentAnswer() {
//ToDo: use answer id to connect random question with its answers
let answers = this.props.questions[0].answer;
  return answers.map((el, idx) => {
    return (
    <li 
    key={idx}
    //onClick not finished yet
    onClick={() => console.log("return answer id: ", el.status)}> 
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

export default connect(mapStateToProps, null)(NextQuestion);