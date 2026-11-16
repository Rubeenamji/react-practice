import { Link } from "react-router-dom";
const BlogList=()=>{
    const blogs=[
        {id:"20",name:"Django Tutorial"},
        {id:"21",name:"Python Tutorial"}
    ];
    return(
        <div className="bloglist">
            <h1>Blog List Page</h1>
            {
                blogs.map((blog,index)=>
                <p>
                    ({index+1})-<Link to={`/blog/${blog.id}`}>{blog.name}</Link>
                </p>)
            }
        </div>
    );
};
export default BlogList;