import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const posts = [
  {
    author: "James Love",
    body: "Hello World",
  },
  {
    author: "James Bond",
    body: "The Name is Bond, James Bond",
  },
];

export default function PostList({isPosting, onStopPosting}) {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>

      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post) => ( <Post key={post.body} author={post.author} body={post.body} />))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      
    </>
  );
}
