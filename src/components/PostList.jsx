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

export default function PostList() {
  const [modalIsVisable, setModalIsVisabel] = useState(true);
  const [enterBody, setEnterBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  function bodyChangeHandler() {
    setEnterBody(event.target.value);
  }

  function authorChnageHandler() {
    setEnterAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisabel(false);
  }

  return (
    <>
      {modalIsVisable ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChnageHandler}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <li>
          <Post author={enterAuthor} body={enterBody}></Post>
        </li>
        {posts.map((value) => (
          <Post author={value.author} body={value.body} />
        ))}
      </ul>
    </>
  );
}
