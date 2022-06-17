import React from "react";
import '../App.css';

export default function Print(props){
    return (
        <>
            <h2 key={props.index+1}>{props.wording}</h2>
            <h4 key={props.index+2}>{props.define}</h4>
        </>
    )
}