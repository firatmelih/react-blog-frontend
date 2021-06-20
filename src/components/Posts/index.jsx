import Post from "../Post";
import "./posts.scss";

export default function Posts(props) {
    return (
        <>
            <div class="ui large buttons switch">
                <button
                    onClick={() => { document.querySelector('#posts').className = "" }}
                    class="ui button "><i class="icon th " /></button>
                <div class="or"></div>
                <button
                    onClick={() => { document.querySelector('#posts').className = "list-view" }}
                    class="ui button"><i class="align justify icon" /></button>
            </div>

            <div id="posts">
                {props.posts.map(post => {
                    return (
                        <Post post={post} />
                    )
                })}
            </div>
        </>


    );
}