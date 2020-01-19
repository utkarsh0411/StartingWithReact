import React from "react"; 
import './UserOutput.css'

const userOutput = (props) => {
    return (<div>
        <p>
           Name: {props.name}
        </p>
    </div>
    );

}

export default userOutput;