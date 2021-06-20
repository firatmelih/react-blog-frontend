import "./post.scss";
import { Link } from "react-router-dom";

export default function Post(props) {
    return (
        <div className="post">
            {props.post.photo && <img className="postImg" src={props.post.photo} alt="" />}
            <div className="postInfo">
                <div className="postCats">
                    {props.post.categories.map((c) => (
                        <span className="postCat">{c}</span>
                    ))}
                </div>
                <Link to={`/post/${props.post._id}`} className="link">
                    <span className="postTitle">{props.post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(props.post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{props.post.desc}</p>
        </div>
    );
}