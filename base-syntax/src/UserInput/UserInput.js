import React from "react";

const userInput=(props)=>{
    const style={
        border:'5px solid red'
    }
    return(
    <input style={style} type="text" onChange={props.userChanged} 
    value={props.name}/>
    );
}

export default userInput;