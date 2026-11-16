import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <div className="app">
            <NavBar/>
            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout;