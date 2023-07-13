import React from 'react';
import { useState, useEffect } from 'react';
import MathComponent from './MathComponent';
//import { Home } from './home';
//import { Counter } from './counter';

export default function App(){
      return(
    
        <MathComponent />
    
      )
}

/*
const App = () => {
  const [count, setCounter] = useState(0);
  
  useEffect(() => {
    alert("reload");
  },[]
);

  return(
           <div>
                  <button onClick={() => setCounter((prevCount)=>(prevCount-1))}>-</button>
                  <h1>{count}</h1>
                  <button onClick={() => setCounter((prevCount)=>(prevCount+1))}>+</button>
          </div>
  );

}

export default App;
*/