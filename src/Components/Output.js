import React from 'react';

const Output =(props) =>{


    
        let {output} =props;
        return (
            <div className="output">
                <p>{output}</p>
            </div>
    )
       
}


export default Output;