import operate from './operate'; 

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('subtracts two numbers', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  it('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('returns error when dividing by zero', () => {
    expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('calculates the modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('returns error when finding modulo by zero', () => {
    expect(operate('1', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws error for unknown operation', () => {
    expect(() => operate('1', '2', '^')).toThrowError(new Error("Unknown operation '^'"));
  });
});
