import React from "react";


const validationComponent = (props) => {
    let content = null
    if (props.cont > 5) {
        content= (
            <p>
                Text too long!!!
            </p>
        );
    }
    else {
        content = (
            <p>
                Text too short!!
            </p>
        );
    }
    return (
         content 
    )
}

export default validationComponent;