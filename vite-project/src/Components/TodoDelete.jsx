import { useState } from "react"


export default function TodoDelete({item,data}){

    console.log("TodoDelete",item)

    const [store,setStore]=useState(data)
    console.log("store",store)
    console.log("data",data)

    const handleDelete=()=>{
        console.log("handleDelete",item)
        setStore( data.filter((el)=>el.title !==item))
    }

    return(
        <div>
               <div style={{border:"1px solid black" ,marginTop:"3rem"}}>
            {
                store.map((e)=>(
                    <div style={{display:"flex",marginTop:"1rem", 
                    justifyContent:"space-around"}}>
                    <h1>{e.title}</h1>
                    <button onClick={handleDelete}>Delete</button>
                 
                 
                </div>))
            }
        </div>
        </div>
    )
}