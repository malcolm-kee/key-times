import { getFriendlyPeriod } from './date';

describe('getFriendlyPeriod', () => {
  test('it is defined', () => {
    expect(getFriendlyPeriod).toBeDefined();
  });

  test('2.30am, 2.40pm -> 2.30am-2.40pm', () => {
    const startDate = new Date(2018, 2, 2, 2, 30);
    const endDate = new Date(2018, 2, 2, 14, 40);

    expect(getFriendlyPeriod(startDate, endDate)).toBe('2.30am-2.40pm');
  });

  test('2.30pm, 2.40pm -> 2.30-2.40pm', () => {
    const startDate = new Date(2018, 2, 2, 14, 30);
    const endDate = new Date(2018, 2, 2, 14, 40);

    expect(getFriendlyPeriod(startDate, endDate)).toBe('2.30-2.40pm');
  });
});
