import { person } from "./Person.types"
export const Person = (props: person) =>{
    return(
        <div>
           {props.name.first} {props.name.last}
        </div>
    )
}