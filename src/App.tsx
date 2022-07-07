import React from "react";
import TodoList from "./Components/TodoList";
import UserList from "./Components/UserList";

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
