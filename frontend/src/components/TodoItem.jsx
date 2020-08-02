import React, { useState } from 'react';
import styled from '@emotion/styled';
import DeleteButton from '../ui/DeleteButton';
import EditButton from '../ui/EditButton';
import SaveButton from '../ui/SaveButton';
// Redux
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const [titleValue, setTitleValue] = useState(todo.title);
  const [descriptionValue, setDescriptionValue] = useState(todo.description);
  const [isEdit, setIsEdit] = useState(false);

  const onEditClick = () => {
    setIsEdit(true);
  };

  const disptach = useDispatch();
  const onSaveButton = () => {
    if (!titleValue) {
      alert('title cannot be empty!');
      return;
    }

    disptach(
      editTodo({
        description: descriptionValue,
        title: titleValue,
        uuid: todo.uuid,
        priority: todo.priority,
        id: todo.id,
      })
    );
    setIsEdit(false);
  };

  return (
    <TodoItemStyled>
      <div className='content'>
        {isEdit ? (
          <>
            <label htmlFor='input1'>
              TITLE:
              <input
                type='text'
                required
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
                placeholder='value ...'
                id='input1'
              />
            </label>

            <label htmlFor='input2'>
              DESCRIPTION:
              <input
                type='text'
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                placeholder='description ...'
              />
            </label>
          </>
        ) : (
          <>
            <p className='title'>TITLE: {todo.title}</p>
            <p>DESCRIPTION: {todo.description}</p>
            <p className='priority' data-type={todo.priority}>
              PRIORITY: {todo.priority}
            </p>
            <hr />
          </>
        )}
      </div>

      <div className='buttons'>
        <DeleteButton id={todo.uuid} />
        {isEdit ? (
          <SaveButton onClick={onSaveButton} />
        ) : (
          <EditButton onClick={onEditClick} />
        )}
      </div>
    </TodoItemStyled>
  );
};

const TodoItemStyled = styled.li`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;

  .title {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .content {
    width: 70%;
  }

  .buttons {
    width: 20%;
    display: flex;
    justify-content: space-around;
  }

  input {
    ${({ theme }) => theme.input};
    margin: 10px 0;
  }

  .priority[data-type='critical'] {
    color: ${({ theme }) => theme.color.red};
  }
  .priority[data-type='normal'] {
    color: ${({ theme }) => theme.color.green};
  }
  .priority[data-type='moderate'] {
    color: ${({ theme }) => theme.color.orange};
  }
  .priority[data-type='blocker'] {
    color: ${({ theme }) => theme.color.grey};
  }
`;

export default TodoItem;
