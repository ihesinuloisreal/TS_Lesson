type GreetProps = {
    name: string
    message?: number
    isLoggedIn: boolean
}
export const Greet = (props:GreetProps) =>{
    const {message = 0 } = props
    return(
    
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}! You have ${message} unread messages` : "Welcome Guest"}
            </h2>
        </div>
    )
}