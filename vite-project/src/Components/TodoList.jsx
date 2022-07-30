

export default function TodoList({data}){
 
    console.log("todo",data)
    return (
        <div style={{border:"1px solid black" ,marginTop:"3rem"}}>
            {
                data.map((item)=>(
                <div style={{display:"flex",marginTop:"1rem", justifyContent:"space-around"}}>
                    <h1>{item}</h1>
                    <button>Delete</button>
                    <button>Save</button>
                </div>))
            }
        </div>
    )
}