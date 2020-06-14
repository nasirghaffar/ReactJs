import React, { Component } from "react";
import InputFile from './InputFile'
import EvaluationFile from "./EvaluationFile";
import DisplayData from "./DisplayData";

class Main extends Component{
   state={
    step: 1,
    textBox:'', 
    labelBox1 :'',
    scoreBox1 :'',
   }

   nextStep=() =>{
       const {step}=this.state
   this.setState({step:step+1});
    }
    prevStep=() =>{
        const {step}=this.state
    this.setState({step:step-1});
     }
handleChange=input =>e =>{
    this.setState({[input]: e.target.value});
}
   showData=() => {
       const {step,textBox,labelBox1, scoreBox1}=this.state;
       if(step===1)
     return(
     <>
     <InputFile
     handleChange={this.handleChange}
     nextStep={this.nextStep}
     textBox={this.textBox}
     />

     </>
     );
     if(step===2)
     return(
     <>
     <EvaluationFile
     handleChange={this.handleChange}
     nextStep={this.nextStep}
     prevStep={this.prevStep}
     labelBox1={this.labelBox1}
     scoreBox1={this.scoreBox1}

     />

     </>
     );
     if(step===3)
     return(
     <>
     <DisplayData
     handleChange={this.handleChange}
     prevStep={this.prevStep}
     textBox= {textBox}
     labelBox1= {labelBox1}
    scoreBox1= {scoreBox1}

     />

     </>
     );
   }
render(){
    const {step}= this.state;
    return(
        <> 
<h2> Step {step} of 3.</h2>
{this.showData()}
        </>
    );
    }
}
export default Main;