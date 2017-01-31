import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { TrueOrFalse} from '../actions/answers'

class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	console.log("Props", this.props)
    return (
      <div>	
        <h1>Germany</h1>
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
    answers: state.answers
  };
}

export default connect(mapStateToProps, null)(Questions);