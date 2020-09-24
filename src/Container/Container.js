import React, { Component, useState } from 'react';
 
import Output from '../Components/Output';
import DisplayNumber from '../Components/DisplayNumber';
import '../css/container.css'


const  Container =(props)=>{


const [output,setOutput]=useState("");

   const  buttonClickHandler = value => {

        if(value === "="){
            getResult()
        }

        else if(value === "AC"){
            reset()
        }
        else if(value === "CE"){
            backspace()
        }

        else {
             
            setOutput(output + value)
        }
    };


    const getResult = () => {
        var checkResult = ''
        if(output.includes('--')){
            checkResult = output.replace('--','+')
        }

          checkResult = output
      

        try {
            setOutput((eval(checkResult) =="0"? "0": eval(checkResult) ) + "");
        } catch (e) {
            setOutput("error")
        }
    };

    const reset = () => {
        setOutput("")
    };

   const  backspace = () => {
       
        setOutput(output.slice(0,-1));
    };

return (
            <div>
                <div className="container">
                    <h1>Calculator</h1>
                    <Output output={output}/>
                    <DisplayNumber buttonClickHandler={buttonClickHandler}/>
                </div>
            </div>
        );
     
}

export default Container;