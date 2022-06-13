import React from "react";
import '../App.css';

export default function Print(props){
    return(
        <div>
            <p key={props.key}><h2>{props.wording}</h2></p>
            <p key={props.key} ><h4>{props.define}</h4></p>       
        </div>
    );
}