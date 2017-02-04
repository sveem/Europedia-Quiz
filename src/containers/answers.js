import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import trueOrFalse from '../actions/answers';

class Answers extends Component {
  constructor(props) {
    super(props);
  }
  
currentAnswer() {
//ToDo: use answer id to connect random question with its answers
let answers = this.props.answers[0].answer;
  return answers.map((el, idx) => {
    return (
    <li 
	  key={idx}
	  //onClick not finished yet
    onClick={() => console.log("return answer id: ", el.score)}> 
    {el.city}
    </li>
   );	
 });
}

  render() {
    return(
      <div>
  	  {this.currentAnswer()}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( { trueOrFalse: trueOrFalse}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);