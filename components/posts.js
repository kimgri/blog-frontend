import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";



const Posts = () => 
{
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://blogfrontend.paf.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    
    <div>
      <h1>Posts</h1>
      <div>
        <h1 style={{backgroundColor: "red"}}>Implemented Åland Colors</h1>
       </div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2  style="background-color:grey;">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>

      ))}
      
    </div>
    
  );
};

export default Posts;