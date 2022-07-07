import { TodoActionTypes, TodosAction, TodoState } from "../../Types/todo";

const initiallState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
};

export const todoReducer = (
  state = initiallState,
  action: TodosAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
