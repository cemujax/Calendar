import { weekdaysShort } from '../date';

describe('weekdaysShort Test', () => {
  it('gets weekdaysShort Array', () => {
    expect(weekdaysShort()).toEqual(['일', '월', '화', '수', '목', '금', '토']);
  });
});
