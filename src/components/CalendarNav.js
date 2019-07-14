import React from 'react';
import styled from 'styled-components/macro';

const CalendarNav = ({ currentMonth, onPrev, onNext }) => {
  return (
    <Nav>
      <NavButton onClick={onPrev}>이전월</NavButton>
      <CurrentMonth data-testid="current-month">{currentMonth}</CurrentMonth>
      <NavButton onClick={onNext}>다음월</NavButton>
    </Nav>
  );
};

const Nav = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  background: #fff;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;

  :hover {
    background: #f7f9f9;
  }
`;

const CurrentMonth = styled.h2`
  margin: 0 0.5rem;
  font-size: 1.4rem;
`;

export default CalendarNav;
