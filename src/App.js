import React from 'react';
import './App.css';
import Something from './components/something';

let list = ["hello", "how", "Are", "You"]

function App() {
  return (
    <div className='wrapper'>
     {list.map((item) => {
      return (
        <Something message={item}/>
      )
     })}

    </div>
  
  );
}

export default App;
