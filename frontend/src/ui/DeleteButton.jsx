import React from 'react';
import styled from '@emotion/styled';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <DeleteButtonStyled onClick={onButtonClick}>
      <AiFillDelete />
    </DeleteButtonStyled>
  );
};

const DeleteButtonStyled = styled.button`
  ${({ theme }) => theme.button};
`;

export default DeleteButton;
