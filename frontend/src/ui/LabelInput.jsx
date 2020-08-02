import React from 'react';
import styled from '@emotion/styled';

const LabelInput = ({ text }) => {
  return <LabelInputStyled>{text}:</LabelInputStyled>;
};

const LabelInputStyled = styled.span``;

export default LabelInput;
