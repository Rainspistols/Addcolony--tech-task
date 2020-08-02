import {
  FETCH_ALL_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SORT_UP,
  SORT_DOWN,
  FILTER_PRIORITY,
  SEARCH_TODO
} from './types';
import {
  getAllTodos,
  addTodoApi,
  deleteTodoApi,
  editTodoApi,
} from '../utils/api';

export const fetchAllTodos = () => (dispatch) => {
  getAllTodos()
    .then((todos) => {
      dispatch({ type: FETCH_ALL_TODOS, payload: todos });
    })
    .catch((error) => console.log(error));
};

export const addTodo = (data) => (dispatch) => {
  addTodoApi(data)
    .then((res) => {
      if (res.message) {
        dispatch({ type: ADD_TODO, payload: data });
      }
    })
    .catch((error) => console.log(error));
};

export const deleteTodo = (id) => (dispatch) => {
  deleteTodoApi(id)
    .then((res) => {
      dispatch({ type: DELETE_TODO, payload: id });
    })
    .catch((error) => console.log(error));
};

export const editTodo = (data) => (dispatch) => {
  editTodoApi(data)
    .then((res) => {
      dispatch({ type: EDIT_TODO, payload: data });
    })
    .catch((error) => console.log(error));
};

export const sortUp = (dispatch) => {
  dispatch({ type: SORT_UP });
};

export const sortDown = (dispatch) => {
  dispatch({ type: SORT_DOWN });
};

export const filterPriority = (data) => (dispatch) => {
  dispatch({ type: FILTER_PRIORITY, payload: data });
};

export const searchTodo = (data) => (dispatch) => {
  dispatch({ type: SEARCH_TODO, payload: data });
};

