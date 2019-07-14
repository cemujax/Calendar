import { weekdaysShort, getValidMonths, filterEvents } from '../date';
import moment from 'moment';
import eventsData from '../../assets/data/Web.json';

describe('weekdaysShort Test', () => {
  it('gets weekdaysShort Array', () => {
    expect(weekdaysShort()).toEqual(['일', '월', '화', '수', '목', '금', '토']);
  });
});

describe('getValidMonths Test', () => {
  const testJuly = '2019-07-13';

  it('gets 2019-07 getValidMonths Array', () => {
    expect(getValidMonths(moment(testJuly))).toEqual([
      '2019-06',
      '2019-07',
      '2019-08',
    ]);
  });
});

describe('filterEvents Test', () => {
  const testMay = '2019-05-05';
  const testJune = '2019-06-05';
  const testJuly = '2019-07-13';

  it('gets 2019-05 filterEvents', () => {
    expect(filterEvents(moment(testMay), eventsData)).toEqual(eventsData);
  });

  it('gets 2019-06 filterEvents ', () => {
    expect(filterEvents(moment(testJune), eventsData)).toEqual([
      {
        date: '2019-05-05',
        event: '어린이날',
      },
      {
        date: '2019-05-05',
        event: '친구와 약속',
      },
      {
        date: '2019-05-08',
        event: '어버이날',
      },
      {
        date: '2019-05-15',
        event: '스승의 날',
      },
    ]);
  });

  it('gets 2019-07 filterEvents', () => {
    expect(filterEvents(moment(testJuly), eventsData)).toEqual([]);
  });
});
