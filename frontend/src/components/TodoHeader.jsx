import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddNewTodo from './AddNewTodo';
import Button from '../ui/Button';
// Reduxx
import { useDispatch } from 'react-redux';
import { searchTodo } from '../redux/actions';

const TodoHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTodo(searchValue));
  };

  return (
    <TodoHeaderStyled>
      <form className='hero' onSubmit={onSubmit}>
        <span>TODO APP</span>
        <input
          type='text'
          placeholder='Search ...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type='submit'>Search</Button>
      </form>

      <AddNewTodo />
    </TodoHeaderStyled>
  );
};

const TodoHeaderStyled = styled.div`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 50px;

  .hero {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 20px;

    span {
      white-space: nowrap;
      margin-right: 20px;
    }
    input {
      border-radius: 5px;
      height: 50px;
      padding: 0 20px;
      margin-right: 20px;
      border: 1px solid ${({ theme }) => theme.color.grey};
      box-sizing: border-box;
      flex-grow: 1;
      flex-shrink: 1;
      min-width: 200px;
    }
  }
`;

export default TodoHeader;
