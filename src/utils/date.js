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

export { DATE_FORMAT, DATE_FORMAT_DD, weekdaysShort };
