import operate from '../../utils/operate';
import calculate from '../../utils/calculate';

describe('calculations', () => {
  let data;

  beforeEach(() => {
    data = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('AC Button', () => {
    data.total = '1';
    data.next = '5';
    data.operation = '+';

    const output = calculate(data, 'AC');
    expect(output).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  describe('Calculations if buttonName is a Number', () => {
    // If button is zero and next number is zero, return an empty object

    test('buttonName is zero and next is 0 and No operation', () => {
      data.next = '0';
      const output = calculate(data, '0');
      expect(output).toEqual({});
    });

    describe('Operation Truthy', () => {
      // if theres an operation, then update next
      test('Next is not equal to 0', () => {
        data.next = '5';
        data.operation = 'x';
        const output = calculate(data, '10');
        expect(output).toEqual({
          total: null,
          next: '510',
          operation: 'x',
        });
      });

      test('Next is 0', () => {
        data.next = '0';
        data.operation = 'x';
        const output = calculate(data, '10');
        expect(output).toEqual({
          total: null,
          next: '10',
          operation: 'x',
        });
      });
    });

    describe('Operation is Falsy', () => {
      test('Next is not 0', () => {
        data.next = '2';
        const output = calculate(data, '5');
        expect(output).toEqual({
          total: null,
          next: '25',
        });
      });

      test('Next is 0', () => {
        data.next = '0';
        const output = calculate(data, '10');
        expect(output).toEqual({
          next: '10',
          total: null,
        });
      });
    });
  });

  describe('ButtonName is a decimal point', () => {
    describe('next is truthy', () => {
      test('next includes . ', () => {
        data.next = '0.5';
        const output = calculate(data, '.');
        expect(output).toEqual({ ...data });
      });

      test('next does not includes . ', () => {
        data.next = '5';
        const output = calculate(data, '.');
        expect(output).toEqual({ ...data, next: '5.' });
      });
    });

    describe('Operation is turthy', () => {
      test('Operator present', () => {
        data.operation = '%';
        const output = calculate(data, '.');
        expect(output).toEqual({ ...data, next: '0.' });
      });
    });

    describe('Total is truthy', () => {
      test('total includes decimal', () => {
        data.total = '0.1';
        const output = calculate(data, '.');
        expect(output).toEqual({});
      });

      test('Total without decimal', () => {
        data.total = '1';
        const output = calculate(data, '.');
        expect(output).toEqual({ ...data, next: '1.' });
      });
    });

    test('data Object is falsy', () => {
      const output = calculate(data, '.');
      expect(output).toEqual({ ...data, next: '0.' });
    });
  });

  describe('Execution with = ', () => {
    test('Operation truthy', () => {
      data.next = '5';
      data.operation = '+';
      data.total = '10';
      const output = calculate(data, '=');
      expect(output).toEqual({
        total: operate('5', '10', '+'),
        next: null,
        operation: null,
      });
    });

    test('Operation Falsy', () => {
      data.next = '5';
      data.total = '10';
      const output = calculate(data, '=');
      expect(output).toEqual({});
    });
  });

  describe('Execute with +/- button', () => {
    test('Next is truthy', () => {
      data.next = '1';
      const output = calculate(data, '+/-');
      expect(output).toEqual({ ...data, next: '-1' });
    });

    test('Total is truthy', () => {
      data.total = '1';
      const output = calculate(data, '+/-');
      expect(output).toEqual({ ...data, total: '-1' });
    });

    test('data Objext is falsy', () => {
      const output = calculate(data, '+/-');
      expect(output).toEqual({});
    });
  });

  test('Pressed operation after pressing = ', () => {
    data.total = '2';
    const output = calculate(data, '+');
    expect(output).toEqual({ ...data, operation: '+' });
  });

  describe('Tyring Operation when there is Existing operation', () => {
    test('Falsy next and Truthy total', () => {
      data.total = '1';
      data.operation = '+';
      const output = calculate(data, '-');
      expect(output).toEqual({ ...data, operation: '-' });
    });

    test('Falsy total', () => {
      data.operation = '+';
      const output = calculate(data, '-');
      expect(output).toEqual({ total: 0, operation: '-' });
    });

    test('data object fully Truthy', () => {
      data.total = '1';
      data.next = '1';
      data.operation = '+';

      const output = calculate(data, '-');
      expect(output).toEqual({
        total: '2',
        next: null,
        operation: '-',
      });
    });
  });

  test('No Operation but user entered it without a number yet', () => {
    const output = calculate(data, '-');
    const expected = data.next ? { total: data.next, next: null, operation: '-' } : { operation: '-' };
    expect(output).toEqual(expected);
  });
});
