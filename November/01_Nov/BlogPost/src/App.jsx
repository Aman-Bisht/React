import { useState } from "react";
import "./App.css";
import PostFrom from "./features/posts/PostFrom";
import Posts from "./features/posts/Posts";

function App() {

  return (
    <div>
      <PostFrom />
      <Posts />
    </div>
  );
}

export default App;
