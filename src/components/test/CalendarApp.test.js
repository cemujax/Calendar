import React from 'react';
import { render } from '@testing-library/react';

import CalendarApp from '../CalendarApp';

describe('<CalendarApp />', () => {
  it('renders CalendarNav and CalendarBody', () => {
    const { getByText, getByTestId } = render(<CalendarApp />);

    // CalendarNav rendering
    getByText('이전월');
    getByText('다음월');
    getByTestId('current-month');

    // CalendarBody rendering
    getByTestId('CalendarBody');
  });
});
