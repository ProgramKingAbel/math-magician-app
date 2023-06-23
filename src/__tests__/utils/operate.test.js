import operate from '../../utils/operate';

test('Addition', () => {
  const output = operate('1', '1', '+');
  expect(output).toBe('2');
});

test('Subtraction', () => {
  const output = operate('1', '1', '-');
  expect(output).toBe('0');
});

test('Multiplication', () => {
  const output = operate('2', '2', 'x');
  expect(output).toBe('4');
});

test('Division', () => {
  const output = operate('2', '2', '÷');
  expect(output).toBe('1');
});

test('Division by Zero', () => {
  const output = operate('2', '0', '÷');
  expect(output).toBe("Can't divide by 0.");
});

test('Modulo', () => {
  const output = operate('2', '2', '%');
  expect(output).toBe('0');
});

test('Modulo when division is by zero', () => {
  const output = operate('2', '0', '%');
  expect(output).toBe("Can't find modulo as can't divide by 0.");
});

test('Error for unknown Operation', () => {
  const operation = '&';
  expect(() => operate('2', '5', operation)).toThrow(
    new Error(`Unknown operation '${operation}'`),
  );
});
