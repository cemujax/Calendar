import React from 'react';
import styled from 'styled-components/macro';

const CalendarCell = ({ day }) => {
  const dayEvents = day.events || [];
  return (
    <DayCell data-testid="day-cell">
      <DayLabel today={day.isToday} data-testid="day-label">
        {day.shortDate}
      </DayLabel>
      <DayContent data-testid="day-content">
        {dayEvents.map((event, index) => (
          <DayEvent key={index}>{event}</DayEvent>
        ))}
      </DayContent>
    </DayCell>
  );
};

const DayCell = styled.div``;

const DayLabel = styled.div`
  /* 오늘 날짜 하이라이팅 */
  background: ${props => (props.today ? '#FA8072' : '#f7f9f9')};
  color: ${props => (props.today ? 'white' : 'black')};
`;

const DayContent = styled.div``;

const DayEvent = styled.div``;

export default CalendarCell;
