import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://blogfrontend.paf.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length)
  {
    console.log("post.js :  if");
    return <div />;
  }
  return (
    <div>
        <div>
        <h1 style={{backgroundColor: "red"}}>Implemented Åland Colors</h1>
       </div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p >
        <em>Published {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Posts;