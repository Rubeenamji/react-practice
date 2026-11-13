const ButtonComponent=(props)=>{
    return(
        <button className="btn" onClick={props.handleClick}>{props.text}</button>
    )
}
export default ButtonComponent;