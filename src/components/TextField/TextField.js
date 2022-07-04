import React from "react";
import './TextField.css';

function TextField(props){
    const {textVal,styleClass} = props;

    return(
        <div className={styleClass}>{textVal}</div>
    );
}

export default TextField;