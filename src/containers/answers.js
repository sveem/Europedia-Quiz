import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { TrueOrFalse} from '../actions/answers'

class Answers extends Component {
  constructor(props) {
    super(props);
  }
  
  currentAnswer() {
    let answers = this.props.answers[0].answer;
     console.log(answers);
     return answers.map((el, idx) => {
       return (
         <li 
 		     key={idx}> 
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

export default connect(mapStateToProps, null)(Answers);