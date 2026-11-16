import {Link,NavLink} from 'react-router-dom'
const NavigationMenu=()=>{
    return(
        <div className="nav-container">
            <div className="nav-menu">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/bloglist">Blog list</NavLink>
                <NavLink to="/addblog">Add Blog</NavLink>
            </div>

        </div>
    )
}
export default NavigationMenu;