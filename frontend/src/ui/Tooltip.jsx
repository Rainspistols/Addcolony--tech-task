import React, { useState } from 'react';
import styled from '@emotion/styled';

const Tooltip = ({ text, children }) => {
  const [inHover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((inHover) => !inHover);
  };
  return (
    <TooltipStyled onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {children}
      {inHover && <span>{text}</span>}
    </TooltipStyled>
  );
};

const TooltipStyled = styled.div`
  position: relative;
  span {
    position: absolute;
    display: inline-block;
    padding: 15px;
    background: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.black};
    text-shadow: none;
    left: 10px;
    top: -10px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 300;
  }
`;

export default Tooltip;
