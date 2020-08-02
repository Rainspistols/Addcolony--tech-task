import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// Redux
import { sortDown, sortUp, filterPriority } from '../redux/actions';
import { useDispatch } from 'react-redux';

const SortPanel = () => {
  const dispatch = useDispatch();

  const [selectValue, setSelectValue] = useState('DEFAULT');

  const onSelectChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(filterPriority(e.target.value));
  };

  return (
    <SortPanelStyled>
      <div className='sort'>
        <span>SORT by id:</span>
        <div onClick={() => dispatch(sortDown)}>
          <BsChevronDown />
        </div>
        <div onClick={() => dispatch(sortUp)}>
          <BsChevronUp />
        </div>
      </div>

      <select onChange={onSelectChange} value={selectValue}>
        <option value='DEFAULT' disabled>
          SELECT PRIORITY
        </option>
        <option value='normal'>normal</option>
        <option value='blocker'>blocker</option>
        <option value='critical'>critical</option>
        <option value='moderate'>moderate</option>
      </select>
    </SortPanelStyled>
  );
};

const SortPanelStyled = styled.div`
  ${({ theme }) => theme.flex.between};
  height: 50px;
  border: 3px solid red;
  border-radius: 50px;
  padding: 0 30px;
  margin-bottom: 50px;

  .sort {
    display: flex;
    align-items: center;
    div {
      width: 40px;
      height: 40px;
      svg {
        width: 100%;
        height: auto;
      }
    }
  }

  select {
    margin-left: auto;
  }
`;

export default SortPanel;
