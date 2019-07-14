import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    const { getByTestId } = render(<CalendarNav currentMonth={currentMonth} />);
    expect(getByTestId('current-month').textContent).toBe(currentMonth); // 현재월 출력
  });

  it('calls onPrev and update props(currentMonth)', () => {
    const onPrev = jest.fn();
    const currentMonth = moment().format(DATE_FORMAT);
    const prevMonth = moment()
      .subtract(1, 'months')
      .format(DATE_FORMAT);

    const { getByText, getByTestId, rerender } = render(
      <CalendarNav currentMonth={currentMonth} onPrev={onPrev} />,
    );
    const prevButton = getByText('이전월');

    expect(getByTestId('current-month').textContent).toBe(currentMonth); // 현재월 출력

    fireEvent.click(prevButton); // 이전월 버튼 클릭
    expect(onPrev).toHaveBeenCalledTimes(1);

    rerender(<CalendarNav currentMonth={prevMonth} onPrev={onPrev} />);
    expect(getByTestId('current-month').textContent).toBe(prevMonth); // 이전월 출력
  });

  it('calls onNext and update props(currentMonth)', () => {
    const onNext = jest.fn();
    const currentMonth = moment().format(DATE_FORMAT);
    const nextMonth = moment()
      .add(1, 'months')
      .format(DATE_FORMAT);

    const { getByText, getByTestId, rerender } = render(
      <CalendarNav currentMonth={currentMonth} onNext={onNext} />,
    );
    const nextButton = getByText('다음월');

    expect(getByTestId('current-month').textContent).toBe(currentMonth); // 현재월 출력

    fireEvent.click(nextButton); // 다음월 버튼 클릭
    expect(onNext).toHaveBeenCalledTimes(1);

    rerender(<CalendarNav currentMonth={nextMonth} onNext={onNext} />);
    expect(getByTestId('current-month').textContent).toBe(nextMonth);
  });
});
