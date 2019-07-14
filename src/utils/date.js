import moment from 'moment';

const DATE_SPLITTER = '-';
const DATE_FORMAT = `YYYY${DATE_SPLITTER}MM`;
const DATE_FORMAT_DD = `YYYY${DATE_SPLITTER}MM${DATE_SPLITTER}DD`;

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
export {
  DATE_FORMAT,
  DATE_FORMAT_DD,
  weekdaysShort,
  getValidMonths,
  filterEvents,
};
