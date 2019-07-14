import React from 'react';
import { render } from '@testing-library/react';
import { weekdaysShort } from '../../utils/date';
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
});
