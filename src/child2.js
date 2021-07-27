import React, { useReducer } from 'react'
import Reducer from './Counter_Reducer';
import "./App.css";
const Child2 = ()=>{
let[state,dispatch] = useReducer(Reducer , 0)
return (

<div align = "center">
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
<h1>  This is a counter of <i>Reducer</i> </h1>
      <hr/> 
<h2> The Value of Counter is : {state}</h2>

<button onClick = {() => dispatch("INCREMENT")} className = "Red_butt"> Increment value </button>

<button onClick = {() => dispatch("DECREMENT")} className = "Red_butt"> Decrement value </button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

);
}

export default Child2;