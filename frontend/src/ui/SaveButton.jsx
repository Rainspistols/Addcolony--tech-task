import React from 'react';
import styled from '@emotion/styled';
import { GrSave } from 'react-icons/gr';

const SaveButton = ({ onClick }) => {
  return (
    <SaveButtonStyled onClick={onClick}>
      <GrSave />
    </SaveButtonStyled>
  );
};

const SaveButtonStyled = styled.button`
  ${({ theme }) => theme.button}
  background: ${({ theme }) => theme.color.green};
`;

export default SaveButton;
