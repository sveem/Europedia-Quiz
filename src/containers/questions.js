import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { TrueOrFalse} from '../actions/questions'

class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	console.log("Props", this.props.questions[0].question)
    return (
      <div>	
        <h1>{this.props.questions[0].question}</h1>
        <ul>
         Berlin
        </ul>
      </div> 
    );	
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}


export default connect(mapStateToProps, null)(Questions);