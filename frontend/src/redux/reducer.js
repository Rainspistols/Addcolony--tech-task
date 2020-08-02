import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FETCH_ALL_TODOS,
  SORT_UP,
  SORT_DOWN,
  FILTER_PRIORITY,
  SEARCH_TODO,
} from './types';

const initialState = {
  todos: [],
  history: [],
  searchableList: [],
};

export default function todoAppReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return {
        ...state,
        todos: [...action.payload],
        history: [...action.payload],
      };

    case ADD_TODO:
      let maxId;
      if (!state.todos.length) {
        maxId = 1;
      } else {
        maxId = state.todos.sort((a, b) => b.id - a.id)[0].id + 1;
      }

      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: maxId }],
        history: [...state.history, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.uuid !== action.payload)],
        history: [
          ...state.history.filter((todo) => todo.uuid !== action.payload),
        ],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.uuid === action.payload.uuid ? action.payload : todo
          ),
        ],
        history: [
          ...state.todos.map((todo) =>
            todo.uuid === action.payload.uuid ? action.payload : todo
          ),
        ],
      };

    case SORT_UP:
      return {
        ...state,
        todos: [...state.todos.sort((a, b) => a.id - b.id)],
      };

    case SORT_DOWN:
      return {
        ...state,
        todos: [...state.todos.sort((a, b) => b.id - a.id)],
      };

    case FILTER_PRIORITY:
      return {
        ...state,
        todos: [
          ...state.history.filter((item) => item.priority === action.payload),
        ],
      };

    case SEARCH_TODO:
      if (action.payload === '') {
        return {
          ...state,
          todos: [...state.searchableList],
        };
      }
      return {
        ...state,
        searchableList: [...state.todos],
        todos: [
          ...state.todos.filter((item) => item.title.match(action.payload)),
        ],
      };

    default:
      return state;
  }
}
