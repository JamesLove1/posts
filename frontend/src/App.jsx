import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {

  const [modalIsVisable, setModalIsVisabel] = useState(false);

  function hideModalHandler() {
    setModalIsVisabel(false);
  }

  function showModalHandler() {
    setModalIsVisabel(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList  isPosting={modalIsVisable} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
