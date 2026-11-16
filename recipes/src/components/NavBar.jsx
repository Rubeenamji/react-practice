import {NavLink} from 'react-router-dom'
const NavBar=()=>{
    return(
        <div className='navbar'>
        <div className='logo'> My Recipes </div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addrecipe">Add Recipes</NavLink></li>
        </ul>
      </div>
    )
}
export default NavBar;