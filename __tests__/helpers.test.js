const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-07-01 22:59:03');
    expect(format_date(date)).toBe('07/01/2022');
});
