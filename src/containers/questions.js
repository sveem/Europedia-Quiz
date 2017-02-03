import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { TrueOrFalse} from '../actions/answers'
import { nextQuestion } from '../actions/questions';
import NextQuestion from './nextQuestion';

class Questions extends Component {
  constructor(props) {
    super(props);
  }

  randomQuestion() {
    let randomLength = this.props.questions.length;
    let random = Math.floor(Math.random() * randomLenght);
    let nextQuestion = this.props.questions[random].question;
  }

  render () {
  	console.log("Props", this.props)
    return (
      <div>	
        <NextQuestion />
        <ul>
         Berlin
        </ul>
      </div> 
    );	
  }
}

const mapStateToProps = (state) => {
  console.log("THE STATE", state);
  return {
    answers: state.answers,
    questions: state.questions
  };
}

export default connect(mapStateToProps, null)(Questions);