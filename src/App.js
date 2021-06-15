import React,{useState,useEffect} from "react";
import axios from "axios";

function App() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>
  {
    axios.get('http://localhost:5000/api/posts')
    .then(res=>{setPosts(res.data)})
    .catch(err=>console.log(err))

  },[])
  console.log(posts);
  return (
   
    <div className="App">
    {posts.map(post=>{
      return(
        <>
        <h1>
        {post.title}
      </h1>
      <h2>
        {post.body}
      </h2>
        </>
      )
      
    })}

     
    </div>
  );
}

export default App;
