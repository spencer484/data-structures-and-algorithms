

const multiBracketValidation = require('./multi-bracket-validation');


describe('Testing for for Multi Bracket Validation', () => {
  test('Works with single curly bracket', () => {
    expect(multiBracketValidation('{}')).toBe(true);
  });
  it('works with a mix of brackets', () => {
    let str = '(){}[[]]';
    expect(multiBracketValidation(str)).toBe(true);
  });
  it('fails correctly', () => {
    let str = '[({}]';
    expect(multiBracketValidation(str)).toBe(false);
  });
  it('fails correctly', () => {
    let str = '(](';
    expect(multiBracketValidation(str)).toBe(false);
  });
  it('fails correctly', () => {
    let str = '{(})';
    expect(multiBracketValidation(str)).toBe(false);
  });
  it('fails with only one bracket', () => {
    let str = '{';
    expect(multiBracketValidation(str)).toBe(false);
  });
});


