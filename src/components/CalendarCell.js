import React from 'react';
import styled from 'styled-components/macro';

const CalendarCell = ({ day }) => {
  const handleShowEvent = events => {
    if (events.length > 0) {
      const msg = events.reduce((acc, event) => acc + event + '\n', '');
      alert(msg);
    }
  };

  const dayEvents = day.events || [];
  return (
    <DayCell data-testid="day-cell">
      <DayLabel today={day.isToday} data-testid="day-label">
        {day.shortDate}
      </DayLabel>
      <DayContent
        onClick={() => handleShowEvent(dayEvents)}
        isEvent={dayEvents}
        data-testid="day-content"
      >
        {dayEvents.map((event, index) => (
          <DayEvent key={index}>{event}</DayEvent>
        ))}
      </DayContent>
    </DayCell>
  );
};

const DayCell = styled.div`
  flex: 1;
  max-width: calc(100% / 7);
  text-align: center;
  border: 1px solid #ccc;
`;

const DayLabel = styled.div`
  border-bottom: 1px solid #ccc;

  /* 오늘 날짜 하이라이팅 */
  background: ${props => (props.today ? '#FA8072' : '#f7f9f9')};
  color: ${props => (props.today ? 'white' : 'black')};
`;

const DayContent = styled.div`
  height: 100px;
  max-height: 150px;
  overflow: auto;
  padding: 5px;
  cursor: ${props => (props.isEvent.length > 0 ? 'pointer' : '')};

  :hover {
    background: ${props => (props.isEvent.length > 0 ? '#f0f0f0' : '')};
  }
`;

const DayEvent = styled.div`
  font-size: 14px;
`;

export default CalendarCell;
