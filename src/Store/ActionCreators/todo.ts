import axios from "axios";
import { Dispatch } from "react";
import { TodoActionTypes, TodosAction } from "../../Types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );

      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей"
      });
    }
  };
};

export const setTodosPage = (page: number): TodosAction => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};
