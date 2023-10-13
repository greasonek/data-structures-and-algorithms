'use stritct';

const repeatedWords = require('./hashMap');

describe('Hash Map', () => {
  it('Detects a repeated word', () => {
    const str = 'I am Emily, I think my dog is cute';
    const results = repeatedWords(str);
    expect(results).toBe('i');
  });
  it('Handles a string with no repeat words', () => {
    const str = 'I live in Washington where hiking is great';
    const results = repeatedWords(str);
    expect(results).toBeUndefined();
  });
  it('Detects a case-insensitive repeated word', () => {
    const str = 'The winters are long, but the summers are worth it.';
    const results = repeatedWords(str);
    expect(results).toBe('the');
  });
});
module.exports = repeatedWords;

