type GreetProps = {
    name: string
    message: number
    isLoggedIn: boolean
}
export const Greet = (props:GreetProps) =>{
    return(
    
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.message} unread messages` : "Welcome Guest"}
            </h2>
        </div>
    )
}