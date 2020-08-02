import React from 'react';
import styled from '@emotion/styled';

const MainLayout = ({ main = '', aside = '' }) => {
  return (
    <MainLayoutStyled>
      <main>{main}</main>
      <aside>{aside}</aside>
    </MainLayoutStyled>
  );
};

const MainLayoutStyled = styled.div`
  display: flex;

  main {
    width: 60%;
  }

  aside {
    width: 40%;
 
  }
`;

export default MainLayout;
