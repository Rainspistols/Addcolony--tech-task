import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import SortPanel from '../components/SortPanel';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoListStyled>
      <SortPanel />

      <ul>
        {todos?.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </TodoListStyled>
  );
};

const TodoListStyled = styled.div``;

export default TodoList;
