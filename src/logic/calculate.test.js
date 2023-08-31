import calculate  from './calculate';
describe('Test for calculator', () => {
  test('The result should be null', () => {
   const obj = {
      total: 2,
      next: '2',
      operation: '+',
   }
   const button = document.createElement('button');
   button.value = "AC";
   const result = calculate(obj,button.value);
      expect(result.total).toBe(null);
      expect(result.next).toBe(null);
      expect(result.operation).toBe(null);
  });

  test('The value of obj.next should be 28', () => {
    let obj = {
       total: 2,
       next: '2',
       operation: '+',
    }
    const button = document.createElement('button');
    button.value = '8';
    const result = calculate(obj,button.value);
       expect(result.next).toBe('28');
   });

   test('The test for decimal', () => {
    let obj = {
       total: 2,
       next: '2',
       operation: '+',
    }
    const button = document.createElement('button');
    button.value = '.';
    const result = calculate(obj,button.value);
       expect(result.next).toBe('2.');
   });

   test('The test for equal', () => {
    let obj = {
       total: 2,
       next: '3',
       operation: '+',
    }
    
     const result = calculate(obj,'=');
       expect(result.total).toBe('5');
   });

   test('The test for toggle(+/-)', () => {
    let obj = {
       total: 2,
       next: '-3',
       operation: '+',
    }
    let obj2 = {
        total: 2,
        next: '3',
        operation: '+',
     }
    
     let result = calculate(obj,'+/-');
       expect(result.next).toBe('3');

       let result2 = calculate(obj2,'+/-');
       expect(result2.next).toBe('-3');
   });
});