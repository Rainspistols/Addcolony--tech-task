import React from 'react';
import styled from '@emotion/styled';

const SetPriority = ({ onClick }) => {
  return (
    <SetPriorityStyled>
      <small>Set priority:</small>
      <span onClick={onClick} className='critical' title='critical' />
      <span onClick={onClick} className='moderate' title='moderate' />
      <span onClick={onClick} className='normal active' title='normal' />
      <span onClick={onClick} className='blocker' title='blocker' />
    </SetPriorityStyled>
  );
};

const SetPriorityStyled = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  span {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50px;
    opacity: 0.5;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }

  .critical {
    background: ${({ theme }) => theme.color.red};
  }

  .moderate {
    background: ${({ theme }) => theme.color.orange};
  }

  .normal {
    background: ${({ theme }) => theme.color.green};
  }

  .blocker {
    background: ${({ theme }) => theme.color.grey};
  }

  .active {
    opacity: 1;
    transform: scale(1.5);
    transition: all 0.3s ease-out;
  }

  small {
    margin-right: 20px;
    font-weight: 700;
  }
`;

export default SetPriority;
