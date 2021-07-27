import './App.css';
import Parent from './parent.js'
import Countercontext from './Counter_Context'
import React,{ useState } from 'react';
import Child2 from './child2';

function App() {
  let count = useState(0)
return(
<div className = "Main">
  <Countercontext.Provider value={count}>
  <Parent />
  </Countercontext.Provider>

  <Child2 />
</div>

);

}

export default App;
