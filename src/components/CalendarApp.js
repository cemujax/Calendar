import React, { Component } from 'react';

import CalendarNav from './CalendarNav';
import CalendarBody from './CalendarBody';

class CalendarApp extends Component {
  render() {
    return (
      <div className="Calendar">
        <CalendarNav />
        <CalendarBody />
      </div>
    );
  }
}

export default CalendarApp;
