import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';

import CalendarNav from '../CalendarNav';

describe('<CalendarNav />', () => {
  const DATE_FORMAT = 'YYYY년 MM월';

  it('has NavButtons and CurrentMonth', () => {
    const { getByText, getByTestId } = render(<CalendarNav />);
    getByText('이전월'); // prevMonth(Button)
    getByText('다음월'); // nextMonth(Button)
    getByTestId('current-month'); // CurrentMonth(h2)
  });

  it('corrects CurrentMonth value', () => {
    const currentMonth = moment().format(DATE_FORMAT);
    console.log('currentMonth', currentMonth);
    const { getByTestId } = render(<CalendarNav currentMonth={currentMonth} />);
    expect(getByTestId('current-month').textContent).toBe(currentMonth); // 현재월 출력
  });
});
