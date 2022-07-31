
import { Button } from "@chakra-ui/react"

export default function TodoDelete({handleDelete}){

    return(
        <div>
            <Button bg="blue" onClick={handleDelete}>Delete</Button>
        </div>
    )
}