import React, { useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';
import Print from "./Print";



export default function Word(){
    const [word, setWord] = useState('');
    const [count, setCount] = useState(0);
    const data = [{}];
    const [definition, setDefinition] = useState('');
    function OnClick(){
        const url = "/api/search?certkey_no=3972&key=60C5985FAD0CE908A6FE289E8D2801F4&target_type=search&req_type=json&part=word&q="+ word +"&sort=dict&start=1&num=10"
        async function search (){
            const response = await axios.get(url, );
            if(response){
                setCount(count+1);
                setDefinition(response.data.channel.item[0].sense[0].definition);
                data[0][word] = definition;
            }
            else{
                setCount(0);
            }
        }
        search();
        setWord('')
    };
    function OnChange(e){
        setWord(e.target.value);    
    };

    return(
        <div className="wordchain">
            <input type="text" placeholder="단어입력" value={word} onChange={OnChange}/>
            <button onClick={OnClick}>제출</button>
            <p><h2>{word}</h2></p>
            <p><h4>{definition}</h4></p>
        </div>
    )
}



