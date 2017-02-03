import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { TrueOrFalse} from '../actions/answers'

class Answers extends Component {
  constructor(props) {
    super(props);
  }
  
  currentAnswer() {
  console.log("This.props", this.props)
  }
  render() {
    return(
      <div>
        <ul>
      	{this.currentAnswer()}
        </ul>	
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers
  }  
};

export default connect(mapStateToProps, null)(Answers);