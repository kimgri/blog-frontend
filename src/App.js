import { Router } from "@reach/router";
import React from 'react';
import './index.css';
import Posts from './components/posts'
import Post from './components/post'

function App() {
  console.log(Posts);
  console.log(Post);

  return (

    <Router>
      <Posts path="/" />
      <Post path="/:id" />
     
    </Router>
    
  );
}

export default App;