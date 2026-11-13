const SelectBox=(props)=>{
    return(
        <div>
            <label>{props.label}:</label>
            <select onChange={(event)=>{alert(event.target.value)}}>
                {
                    props.options.map((option)=>(
                        <option value={option.value}>{option.label}</option>

                    ))
                }
            </select>
        </div>
    )
}
export default SelectBox;