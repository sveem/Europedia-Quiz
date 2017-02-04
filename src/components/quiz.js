import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Quiz extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to EUROPEDIA. To begin the quiz press the START button!</h1>
      <button type="button"> <Link to="/test1">Start</Link></button>
      </div>
    );
  }
}

