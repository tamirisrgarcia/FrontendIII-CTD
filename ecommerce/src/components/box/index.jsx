export default function Box(props){
    return(
        <div>
            <h1>{props.children}</h1>
            <button onClick={props.msg}>Clique</button>
        </div>
    )
}