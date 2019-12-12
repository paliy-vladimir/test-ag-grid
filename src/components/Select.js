import React from 'react';
import styled from 'styled-components';

const paginator = { options: [1, 3, 5, 10], selected: 5 };

const Select = ({ options, selected, text, onChange }) => {
  const uniqOprions = [...new Set(options)];
  return <StyledContent>
    <p>{text}</p>
    <select onChange={onChange}>
      {uniqOprions.map((el) => <option value={el} selected={selected === el}> {el} </option>)}
    </select>
  </StyledContent>
};

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -25px;
  position: absolute;
  p {
    margin: 0 10px 0 0;
  }
`;


Select.defaultProps = {
  options: paginator.options,
  selected: paginator.selected,
  text: 'Page Size:',
}

export default Select;
