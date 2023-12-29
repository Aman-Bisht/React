import { useState } from "react";
import "./App.css";
import Posts from "./features/posts/Posts";
import PostFrom from "./features/posts/PostFrom";

function App() {

  return (
    <div>
      <PostFrom />
      <Posts />
    </div>
  );
}

export default App;
