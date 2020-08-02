import React from 'react';
import styled from '@emotion/styled';
import { FiEdit } from 'react-icons/fi';

const EditButton = ({ onClick }) => {
  return (
    <EditButtonStyled onClick={onClick}>
      <FiEdit />
    </EditButtonStyled>
  );
};

const EditButtonStyled = styled.button`
  ${({ theme }) => theme.button};
`;

export default EditButton;
