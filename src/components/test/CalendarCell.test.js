import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getDaysInMonth } from '../../utils/date';
import moment from 'moment';

import CalendarCell from '../CalendarCell';

describe('<CalendarCell />', () => {
  const cellStyle = {
    today: {
      background: '#FA8072',
      color: 'white',
    },
    default: {
      background: '#f7f9f9',
      color: 'black',
    },
  };
  const daysInToday = getDaysInMonth(moment());
  const daysInMay = getDaysInMonth(moment('2019-05'));

  it('Today CalendarCell', () => {
    const today = daysInToday.find(
      day => day.date === moment().format('YYYY-MM-DD'),
    );
    const { shortDate } = today;
    const { getByTestId } = render(<CalendarCell day={today} />);
    const DayLable = getByTestId('day-label');

    // shortDate 체크
    expect(DayLable.textContent).toBe(String(shortDate));

    // today 스타일 체크
    expect(DayLable).toHaveStyle(`background: ${cellStyle.today.background}`);
    expect(DayLable).toHaveStyle(`color: ${cellStyle.today.color}`);
  });

  // 이벤트 없음
  it('2019-05-03 CalendarCell', () => {
    global.alert = jest.fn();
    const day0503 = daysInMay.find(day => day.date === '2019-05-03');
    const { getByText, getByTestId } = render(<CalendarCell day={day0503} />);
    const DayLable = getByText('3'); // shortDate

    // today 유무 스타일 체크
    expect(DayLable).toHaveStyle(`background: ${cellStyle.default.background}`);
    expect(DayLable).toHaveStyle(`color: ${cellStyle.default.color}`);

    const DayContent = getByTestId('day-content');
    const DayEventNodes = DayContent.children;

    // Event
    expect(DayEventNodes.length).toBe(0); // 이벤트 갯수

    // 클릭 및 alert 호출 테스트
    fireEvent.click(DayContent);
    expect(global.alert).toHaveBeenCalledTimes(0);
  });

  // 이벤트 2개 존재
  it('2019-05-05 CalendarCell', () => {
    global.alert = jest.fn();
    const day0505 = daysInMay.find(day => day.date === '2019-05-05');
    const { getByText, getByTestId } = render(<CalendarCell day={day0505} />);
    const DayLable = getByText('5'); // shortDate

    // today 유무 스타일 체크
    expect(DayLable).toHaveStyle(`background: ${cellStyle.default.background}`);
    expect(DayLable).toHaveStyle(`color: ${cellStyle.default.color}`);

    const DayContent = getByTestId('day-content');
    const DayEventNodes = DayContent.children;

    // Event
    expect(DayEventNodes.length).toBe(2); // 이벤트 갯수
    const Event1 = getByText('어린이날');
    const Event2 = getByText('친구와 약속');
    expect(DayEventNodes[0]).toBe(Event1);
    expect(DayEventNodes[1]).toBe(Event2);

    // alert 호출 테스트
    fireEvent.click(DayContent);
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
