import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate();
    return(
        <div className="homepage">
            <h1>Home Page</h1>
            <button onClick={()=>navigate("/")}>go to home</button>
            <button onClick={()=>navigate("/addblog")}>go to add blog</button>
            <button onClick={()=>navigate("/bloglist")}>go to blog list</button>
        </div>
    );
};
export default Home;