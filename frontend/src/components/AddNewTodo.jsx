import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '../ui/Button';
import { v4 as uuidv4 } from 'uuid';
import SetPriority from '../components/SetPriority';
// Redux
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddNewTodo = () => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('normal');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: titleValue,
        description: descriptionValue,
        priority: priorityValue,
        uuid: uuidv4(),
      })
    );

    setTitleValue('');
    setDescriptionValue('');
  };

  const onPriority = (e) => {
    e.target.parentNode
      .querySelectorAll('span')
      .forEach((item) => item.classList.remove('active'));
    setPriorityValue(e.target.title);
    e.target.className += ' active';
  };

  return (
    <AddNewTodoStyled>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title ...'
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Desctiption ...'
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />

        <Button type='submit'>Add Todo</Button>

        <SetPriority onClick={onPriority} />
      </form>
    </AddNewTodoStyled>
  );
};

const AddNewTodoStyled = styled.div`
  input {
    ${({ theme }) => theme.input};
    margin-bottom: 10px;
    margin-right: 0;
  }

  form {
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 5px;
    padding: 20px;
    flex-grow: 1;
    flex-shrink: 1;
    ${({ theme }) => theme.flex.between};
    flex-wrap: wrap;
  }
`;

export default AddNewTodo;
