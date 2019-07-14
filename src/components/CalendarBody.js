import React from 'react';
import styled from 'styled-components/macro';

const CalendarBody = ({ weekdaysShort }) => {
  return (
    <BodyContainer>
      {/* 요일 */}
      <DayContainer data-testid="weekdays">
        {(weekdaysShort || []).map((week, index) => (
          <DayName key={index} data-testid="weekday">
            {week}
          </DayName>
        ))}
      </DayContainer>
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  margin-top: 1rem;
`;

const DayContainer = styled.div``;

const DayName = styled.div``;

export default CalendarBody;
