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

const Nav = styled.div``;

const NavButton = styled.button``;

const CurrentMonth = styled.h2``;

export default CalendarNav;
