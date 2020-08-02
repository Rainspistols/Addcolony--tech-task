import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { getAllTodos } from '../utils/api';

import TodoHeader from './TodoHeader';
import TodoLayoutStyled from '../layouts/TodoLayout';
import TodoList from './TodoList';

const Todos = () => {
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <TodosStyled>
      <TodoLayoutStyled>
        <TodoHeader />
        <TodoList />
      </TodoLayoutStyled>
    </TodosStyled>
  );
};

const TodosStyled = styled.div`
  input {
    width: 100%;
  }

  .inputs {
    margin-bottom: 40px;
  }
`;

export default Todos;
