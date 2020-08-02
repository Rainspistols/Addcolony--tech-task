import React from 'react';
import styled from '@emotion/styled';

const TodoLayout = ({ children }) => {
  return <TodoLayoutStyled>{children}</TodoLayoutStyled>;
};

const TodoLayoutStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
`;

export default TodoLayout;
