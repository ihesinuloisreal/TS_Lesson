type styleProps = {
    style: React.CSSProperties
}

export const Container = (props: styleProps) => {
    return (
        <div style={props.style}>
            Text container goes here
        </div>
    )
}