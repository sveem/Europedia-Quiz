import React from 'react';
import { Component } from 'react';

export default class Start extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to EUROPEDIA. To begin the quiz press the START button!</h1>
        <button type="button" onClick={() => console.log("What do you know about Europe?")}>Start</button>
      </div>
    );
  }
} 
