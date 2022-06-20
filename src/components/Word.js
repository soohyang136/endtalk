import axios from "axios";
import React, { useState } from "react";
import '../App.css';
import Print from './Print';

let apro = 0;
let tem = [];
export default function Word(){    
    const [word, setWord] = useState('');
    const [data, setData] = useState([]);
    async function search(subword){
        const url = "/api/search?certkey_no=3972&key=60C5985FAD0CE908A6FE289E8D2801F4&target_type=search&req_type=json&part=word&q="+ subword +"&sort=dict&start=1&num=10";
        const response = await axios.get(url, )
        if(response.data.channel.total !== '0') {
            tem[apro] = {
                wording: subword,
                define: response.data.channel.item[0].sense[0].definition
            };
            setData(tem.reverse());
            apro += 1;
        }
        else{
            alert("실패");
            window.location.replace("/");
        }
    }
    function Onchange(e){
        setWord(e.target.value);
    }

    function Onclick(){
        if(apro === 0 || data[apro-1].wording[data[apro-1].wording.length - 1] === word[0] || word.length > 1) {
            for(let i = 0; i < data.length; i++){
                if(word === data[i].wording){
                    alert("실패");
                    window.location.replace("/");
                }
            }
            search(word);
        }
        else{
            alert("실패");
            window.location.replace("/");
        }
        setWord("");
    }

    function OnEnter(e){
        if(e.key === "Enter") {
            Onclick();
        }
    }

    return(
        <div onKeyPress={OnEnter} className="wordchain">
            <input value={word} onChange={Onchange} placeholder="단어입력" />
            <button onClick={Onclick}>제출</button>
            {data.map((p, index) =>{
                return <Print wording = {p.wording} define = {p.define} index={index} key={index} />
            })
            }
        </div>
    )
}