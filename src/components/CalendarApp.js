import React, { Component } from 'react';
import moment from 'moment';
import { DATE_FORMAT_KOR, getDaysInMonth, weekdaysShort } from '../utils/date';

import CalendarNav from './CalendarNav';
import CalendarBody from './CalendarBody';

class CalendarApp extends Component {
  state = {
    curDate: moment(),
  };

  handlePrev = () => {
    this.setState({
      curDate: this.state.curDate.subtract(1, 'months'),
    });
  };

  handleNext = () => {
    this.setState({
      curDate: this.state.curDate.add(1, 'months'),
    });
  };

  getDays = () => {
    const daysInMonth = getDaysInMonth(this.state.curDate);
    return daysInMonth;
  };
  render() {
    const { curDate } = this.state;
    const { handlePrev, handleNext, getDays } = this;

    return (
      <div className="Calendar">
        <CalendarNav
          currentMonth={moment(curDate).format(DATE_FORMAT_KOR)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <CalendarBody days={getDays()} weekdaysShort={weekdaysShort()} />
      </div>
    );
  }
}

export default CalendarApp;
