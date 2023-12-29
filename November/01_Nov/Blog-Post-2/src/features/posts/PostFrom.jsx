import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { postAdded } from "./postsSlice";
// import { nanoid } from "@reduxjs/toolkit";

function PostFrom() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleAuthor = (e) => setUserId(e.target.value);

  const handleButton = () => {
    // dispatch(postAdded(title, content));
    // setTitle("");
    // setContent("");

    // if (title && content) {
    //   dispatch(postAdded({
    //       id:nanoid,
    //       title,
    //       content
    //   }));
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("")
    }
  };

  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <form>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitle} />
        <label>Author</label>
        <select value={userId} onChange={handleAuthor}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label>Content</label>
        <input type="text" value={content} onChange={handleContent} />

        <button type="button" disabled={!cansave} onClick={handleButton}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default PostFrom;
