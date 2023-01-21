import React from "react"

type oscaProps = {
    children: React.ReactNode
}

export const Osca = (props: oscaProps) =>{
    return(
        <div>{props.children}</div>
    )
}