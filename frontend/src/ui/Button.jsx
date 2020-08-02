import React from 'react';
import styled from '@emotion/styled';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  height: 50px;
  background: transparent;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  white-space: nowrap;
`;

export default Button;
