import React from 'react';
import { render } from '@testing-library/react';
import { weekdaysShort, getDaysInMonth } from '../../utils/date';
import moment from 'moment';

import CalendarBody from '../CalendarBody';

describe('<CalendarBody />', () => {
  const weekdaysArr = weekdaysShort(); // ['일', '월', '화', '수', '목', '금', '토']

  it('CalendarBody weekdays', () => {
    const { getByTestId, getAllByTestId } = render(
      <CalendarBody weekdaysShort={weekdaysArr} />,
    );
    const weekdaysContainer = getByTestId('weekdays');
    const weekdaysNodes = getAllByTestId('weekday');

    expect(weekdaysContainer.children.length).toBe(7); // length test

    // matches value
    weekdaysNodes.forEach((node, index) => {
      expect(node.textContent).toBe(weekdaysArr[index]);
    });
  });

  it('CalendarBody days', () => {
    const daysInMonth = getDaysInMonth(moment());
    const totalCount = daysInMonth.length;
    const rowLength = Math.ceil(totalCount / 7);

    const { getAllByTestId } = render(<CalendarBody days={daysInMonth} />);
    const dayContainers = getAllByTestId('days');
    const dayCells = getAllByTestId('day-cell');

    expect(dayContainers.length).toBe(rowLength); // row 갯수 test
    expect(dayCells.length).toBe(totalCount); // 총 day cell 갯수 test
  });
});
