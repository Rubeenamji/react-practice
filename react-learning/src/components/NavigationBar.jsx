import {Link} from 'react-router-dom'
const NavigationMenu=()=>{
    return(
        <div className="nav-container">
            <div className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/bloglist">Blog list</Link>
                <Link to="/addblog">Add Blog</Link>
            </div>

        </div>
    )
}
export default NavigationMenu;