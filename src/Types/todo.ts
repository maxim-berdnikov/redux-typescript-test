export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
  }
  
  export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    SET_TODOS_PAGE = "SET_TODOS_PAGE",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR"
  }
  
  export interface FetchTodosActions {
    type: TodoActionTypes.FETCH_TODOS;
  }
  export interface FetchTodosSuccessActions {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
  }
  export interface FetchTodosErrorActions {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
  }
  export interface SetTodosPage {
    type: TodoActionTypes.SET_TODOS_PAGE;
    payload: number;
  }
  
  export type TodosAction =
    | FetchTodosActions
    | FetchTodosSuccessActions
    | SetTodosPage
    | FetchTodosErrorActions;
  