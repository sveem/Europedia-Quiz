import React from 'react';
import ReactDOM from 'react-dom';            
    
import Start from './components/app'   

const App = () => {
  return (
  	<div>
  	  <Start />
    </div>
   )
};


ReactDOM.render(<App />, document.querySelector('.container'));