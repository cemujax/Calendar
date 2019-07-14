import React from 'react';
import { render } from '@testing-library/react';
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
});
