import { Name } from "./Person.types"


type listProps = {
    name: Name[]
}
export const PersonList = (props: listProps) => {
    return (
        <div>
            {props.name.map(name=> {
                return(
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}