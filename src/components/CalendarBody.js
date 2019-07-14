import React from 'react';
import styled from 'styled-components/macro';

import CalendarCell from './CalendarCell';

const CalendarBody = ({ weekdaysShort, days }) => {
  // 해당 달 일 테이블 (이전달 말, 이번달, 다음달 초)
  const getDayTable = () => {
    const dayTable = [];
    const rowLength = Math.ceil(days.length / 7);

    for (let i = 1; i <= rowLength; i++) {
      // 날짜 한 줄 (일 ~ 토)
      const dayList = days
        .slice((i - 1) * 7, i * 7)
        .map((day, index) => <CalendarCell key={day.idx} day={day} />);
      dayTable.push(
        <DayContainer key={i} data-testid="days">
          {dayList}
        </DayContainer>,
      );
    }
    return dayTable;
  };

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
      {/* days */}
      {days && days.length > 0 && getDayTable()}
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  margin-top: 1rem;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DayName = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 3px;
  background: #bbb;
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

export default CalendarBody;
