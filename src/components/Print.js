import React from "react";
import '../App.css';

export default function Print(props){
    return(
        <>
            <h2><p key={props.index + 2}>{props.wording}</p></h2>
            <h4><p key={props.index + 1} >{props.define}</p></h4>       
        </>
    );
}