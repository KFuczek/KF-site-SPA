/* eslint-disable */

import { isOdd } from '../maths-helper';

describe('maths helpers tests', () => {
  it('is Odd function ', () => {
    const reult = isOdd(23);
    expect(reult).toBe(true);
  });
});
