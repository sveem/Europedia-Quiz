import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestion } from '../actions/questions';

class NextQuestion extends Component {
  render() {
  	console.log("Next Question",this.props)
    return(
      <div>
        <h1>Which is the Capital of Berlin?
        </h1>
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