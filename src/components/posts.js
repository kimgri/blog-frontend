import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "/api/posts"  
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1 style={{backgroundColor: "LightBlue"}} >CloudFlare Worker Powered website! (with CF pages too)</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 style={{backgroundColor: "LightYellow"}}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;