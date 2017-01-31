import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

export default class Questions extends Component {
  constructor(props) {
    super(props);
  }


  render () {
  	console.log(this.props)
    return (
      <ul>
      HELLO WORLD
      </ul> 
    );	
  }
}
