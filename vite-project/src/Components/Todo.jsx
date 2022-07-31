import { useState } from "react"
import React from "react"

import TodoDelete from "./TodoDelete"

export default function Todo(){

    const [text, setText]=useState("")
    const [data,setData]=useState([])
    
    const handleInput=(e)=>{
        setText(e.target.value)
    }

    const handleAdd=()=>{
        const newData={
            title:text,
            status: true,
            id: new Date().toDateString() + text
        };
        setData([...data,newData])
        setText("")
    }
//  console.log("data",data)
//     console.log(text)

    const handleToggle=(id)=>{
        const updateTodo=data.map((todo)=>
        todo.id==id? {...todo, status: !todo.status } : todo
        );
       setData(updateTodo)
    //    console.log("update",updateTodo)
    }

    const handleDelete=(id)=>{
        setData(data.filter((todo)=>todo.id!==id));
        
    };


    return(
        <div>
            <input type={text} value={text} onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
        {
            data.map((el)=><div key={el.id}>
                <h1>{el.title}</h1>
                <li>{el.status ? "DONE" : "NOT DONE"}</li>
                <button onClick={()=>handleToggle(el.id)}>Toggle</button>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>

            </div>)
        }
        </div>
    )
}