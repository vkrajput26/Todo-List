import { useState } from "react"
import React from "react"
import TodoList from "./TodoList"


export default function Todo(){

    const [text, setText]=useState("")
    const [data,setData]=useState([])
    
    const handleInput=(e)=>{
        setText(e.target.value)
    }

    const handleAdd=()=>{
        setData([...data,text])
        setText("")
    }
 console.log("data",data)
    console.log(text)
    return(
        <div>
            <input type={text} value={text} onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
        <TodoList data={data}/>
        </div>
    )
}