import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { TrueOrFalse} from '../actions/answers'
import { nextQuestion } from '../actions/questions';
import NextQuestion from './nextQuestion';
import Answers from './answers';

class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	console.log("Props", this.props)
    return (
      <div>	
        <NextQuestion />
        <Answers />
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