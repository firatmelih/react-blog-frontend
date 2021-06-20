import Post from "../Post";
import "./posts.scss";

export default function Posts() {
    return (
        <>
            <div class="ui large buttons switch">
                <button
                    onClick={() => { document.querySelector('#posts').className = "" }}
                    class="ui button "><i class="icon th " /></button>
                <div class="or"></div>
                <button
                    onClick={() => { document.querySelector('#posts').className = "list" }}
                    class="ui button"><i class="align justify icon" /></button>
            </div>

            <div id="posts">
                <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Post img="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
        </>


    );
}