import "./App.css"
import Countercontext from './Counter_Context';
import React,{ useContext } from 'react';

const Child = () =>
{
let counter_value = useContext(Countercontext)
return(

    <div align = "center">
        <br/>
        <hr/>
      <h1>  This is a counter of <i>Context API</i> </h1>
      <hr/> 
<h2> The Value of Counter is : {counter_value[0]}</h2>

<button onClick = {()=> {counter_value[1](++counter_value[0])}} className="cont_butt">Increment Value</button>

<button onClick = {()=> {counter_value[1](--counter_value[0])}} className="cont_butt">Decrement Value</button>
    </div>
);

}

export default Child;