import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Demo.css'


let Demo =({name}) =>{
    return <div className="maindiv_style">
    <h1> {name}  my name prakash </h1>
    <p>this is my first react file</p>
    <p>pawan is chutiya</p>
</div>
}


//class Demo extends Component {
 // render() {
 //   return <div className="maindiv_style">
  //      <h1> {this.props.name}  my name prakash </h1>
   //     <p>this is my first react file</p>
    //    <p>pawan is chutiya</p>
   // </div>
 // }
//}
export default Demo;