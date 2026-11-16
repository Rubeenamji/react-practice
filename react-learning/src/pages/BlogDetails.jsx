
import {useParams} from 'react-router-dom'
const BlogDetails=()=>{
    const param=useParams();
    const id=param.id;
    return(
        <div className="addblog">
            <h1>Blog Details</h1>
            <p>id:{id}</p>
        </div>
    );
};
export default BlogDetails;