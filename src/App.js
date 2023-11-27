import React from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
