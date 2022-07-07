import React, { useEffect } from "react";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodosPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  return (
    <>
      {loading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {todos && !loading
        ? todos.map((todo) => (
            <p key={todo.id}>
              {todo.id} - {todo.title}
            </p>
          ))
        : null}

      {pages ? (
        <div style={{ display: "flex" }}>
          {pages &&
            pages.map((p) => (
              <div
                style={{
                  border: p === page ? "2px solid green" : "1px solid gray",
                  padding: "10px"
                }}
                onClick={() => setTodosPage(p)}
              >
                {p}
              </div>
            ))}
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
