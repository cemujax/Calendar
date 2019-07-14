import moment from 'moment';
import eventsData from '../assets/data/Web.json';

const DATE_SPLITTER = '-';
const DATE_FORMAT = `YYYY${DATE_SPLITTER}MM`;
const DATE_FORMAT_DD = `YYYY${DATE_SPLITTER}MM${DATE_SPLITTER}DD`;
const CALENDAR_END_DAY = 6; // "SATURDAY"

const weekdaysShort = () => {
  moment.updateLocale('ko', {
    weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
  });
  return moment.weekdaysShort();
};

const getValidMonths = curDate => {
  const prevMonth = moment(curDate)
    .subtract(1, 'months')
    .format(DATE_FORMAT);
  const nextMonth = moment(curDate)
    .add(1, 'months')
    .format(DATE_FORMAT);

  return [prevMonth, curDate.format(DATE_FORMAT), nextMonth];
};

const filterEvents = (curDate, events) => {
  const validMonths = getValidMonths(curDate);
  const withinedEvents = events.filter(event =>
    validMonths.includes(moment(event.date).format(DATE_FORMAT)),
  );
  return withinedEvents;
};

const getDaysInMonth = curDate => {
  const daysInMonth = [];
  const today = moment().format(DATE_FORMAT_DD);
  const year = moment(curDate).year();
  const month = moment(curDate).month();
  const prevMonth = moment(curDate).subtract(1, 'months');
  const nextMonth = moment(curDate).add(1, 'months');

  const thisMonthLength = curDate.daysInMonth(); // 이번달 일 갯수
  const prevMonthDayLength = moment(curDate)
    .startOf('month')
    .day(); // 지난달 일 갯수
  const nextMonthDayLength =
    CALENDAR_END_DAY -
    moment(curDate)
      .endOf('month')
      .day(); // 다음달 일 갯수

  const totalLength = thisMonthLength + prevMonthDayLength + nextMonthDayLength;
  const withinedEvents = filterEvents(curDate, eventsData); // 기간 내 이벤트

  for (let i = 0; i < totalLength; i++) {
    let date = '', // YYYY-MM-DD
      shortDate = ''; // DD

    // 지난달 말
    if (i < prevMonthDayLength) {
      shortDate = prevMonth.daysInMonth() - prevMonthDayLength + i + 1;
      date = moment([year, prevMonth.month(), shortDate]).format('YYYY-MM-DD');
    }
    // 이번달
    else if (
      i >= prevMonthDayLength &&
      i < prevMonthDayLength + thisMonthLength
    ) {
      shortDate = i + 1 - prevMonthDayLength;
      date = moment([year, month, shortDate]).format('YYYY-MM-DD');
    }
    // 다음달 초
    else {
      shortDate = i + 1 - (prevMonthDayLength + thisMonthLength);
      date = moment([year, nextMonth.month(), shortDate]).format('YYYY-MM-DD');
    }

    daysInMonth[i] = {
      idx: i,
      date,
      shortDate,
      isToday: today === date ? true : false,
      events: withinedEvents
        .filter(event => event.date === date)
        .map(obj => obj.event),
    };
  }
  return daysInMonth;
};

export {
  DATE_FORMAT,
  DATE_FORMAT_DD,
  weekdaysShort,
  getValidMonths,
  filterEvents,
  getDaysInMonth,
};
