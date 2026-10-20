const combineUsers = require('./index');

describe('combineUsers', () => {
  test('merges usernames from all input arrays in order', () => {
    expect(combineUsers(['alice', 'bob'], ['charlie'])).toEqual({
      users: ['alice', 'bob', 'charlie'],
      merge_date: Date.today().toString('M/d/yyyy'),
    });
  });

  test('returns an empty users array when called without arguments', () => {
    expect(combineUsers()).toEqual({
      users: [],
      merge_date: Date.today().toString('M/d/yyyy'),
    });
  });
});
