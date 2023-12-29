import React from "react";
import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo"
import ReactionBtn from "./ReactionBtn";

function Posts() {
  // const postList = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo time={post.date}/>
      </p>
      <ReactionBtn post={post}/>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default Posts;
