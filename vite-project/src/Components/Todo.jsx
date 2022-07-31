import { useState } from "react"
import React from "react"
import {Box,Button,Input,Heading} from "@chakra-ui/react"

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
        <Box bg="teal">
            <Heading mt="1rem" mb="2rem" color="white">Todo App</Heading>
            <Input w="60%" bg="white"  placeholder="Type here!" type={text} value={text} onChange={handleInput} />
        <Button ml="1rem"  bg="blue"  onClick={handleAdd}>Add</Button>
        {
            data.map((el)=>
            <Box key={el.id} bg="blueviolet" color="white" 
            display="flex" justifyContent="space-between" mt="2rem">
              
                <Heading>{el.title}</Heading>
                <Heading >{el.status ? ( <Heading  bg="green"> DONE</Heading>) : 
               <Heading bg="red"> NOT DONE </Heading>}</Heading>
                <Button bg="blue"  onClick={()=>handleToggle(el.id)}>Toggle</Button>
              
                <TodoDelete handleDelete={()=>handleDelete(el.id)}/>
            </Box>)
        }
        </Box>
    )
}