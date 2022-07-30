import { useState } from "react"


export default function TodoDelete({item,data}){

    console.log("TodoDelete",item)

    const [store,setStore]=useState()
    console.log("data",data)

    const handleDelete=()=>{
        console.log("handleDelete",item)
        // data.filter(data=>)
    }

    return(
        <div>
               <button onClick={handleDelete}>Delete</button>
                   
        </div>
    )
}