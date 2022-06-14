import React, { useEffect, useState } from "react";
import '../App.css';
import axios from 'axios';
import Print from "./Print";

let apro = 0;
const data = [];
export default function Word(){
    const [word, setWord] = useState('');
    const [count, setCount] = useState(0);
    let definition = '';
    function OnClick(){
        if(apro === 0 || data[apro-1].wording[data[apro-1].wording.length - 1] === word[0]) {
            async function search (){
                const url = "/api/search?certkey_no=3972&key=60C5985FAD0CE908A6FE289E8D2801F4&target_type=search&req_type=json&part=word&q="+ word +"&sort=dict&start=1&num=10";
                const response = await axios.get(url, );
                if(response.data.channel.total !== '0') {
                    console.log(response);
                    setCount(count+1);
                    definition = response.data.channel.item[0].sense[0].definition;
                    data[apro] = {
                        wording: word,
                        define: definition,
                    };
                    apro += 1;
                }
                else {
                    alert("없는 단어 입니다.");
                    window.location.replace("/");
                    setCount(0);
                }
            }
            search();
        }
        else {
            alert("실패");
            window.location.replace("/");
        }
        setWord('')
    };
    function OnChange(e){
        setWord(e.target.value);    
    };

    function onKeyPress(e){
        if(e.key === "Enter") {
            OnClick();
        }
    }

    return(
        <div className="wordchain" onKeyPress={onKeyPress}>
            <input type="text" placeholder="단어입력" value={word} onChange={OnChange}/>
            <button onClick={OnClick}>제출</button>
            {data.slice(0).reverse().map( (p, index) => {
                return <Print wording = {p.wording} define = {p.define} key={index}/>
            })
            }
        </div>
    )
}



