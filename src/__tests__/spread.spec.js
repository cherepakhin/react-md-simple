
describe('spread operator', () => {
    it('Combine Array (Concatenate Arrays)', () => {
        var arr23 = ['two', 'three'];
        expect(['one', ...arr23, 'four']).toEqual(['one', 'two', 'three', 'four']);
    });
    it('Copying Array', () => {
        var arr23 = ['one', 'two'];
        var appCopy = [...arr23];
        expect(appCopy).toEqual(['one', 'two']);
    });
    it('Calling Functions', () => {
        function f1(a, b) {
            return a + " " + b;
        }
        var arr = ['one', 'two'];
        expect(f1(...arr)).toEqual('one two');

        var arr3 = ['one', 'two', 'three'];
        expect(f1(...arr3)).toEqual('one two');
    });
    it('Destructing array', () => {
        let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
        expect(x).toEqual(1);
        expect(y).toEqual(2);
        expect(z).toEqual({ a: 3, b: 4 });
    });
    it('Math array', () => {
        let nums = [1,2,3]
        expect(Math.max(...nums)).toEqual(3);
    });
    it('Combine object', () => {
        var carType = {
            model: 'Toyota',
            year: 2000
        };
        var fuel = 'AI97';
        var combineObj = {
            ...carType,
            fuel
        }
        expect(combineObj).toEqual({
            model: 'Toyota',
            year: 2000,
            fuel: 'AI97'
        });
    });
    it('Reduce', () =>{
        let Sum = (...numbers) => {
            return numbers.reduce((prev, current) => prev + current)        
        }
        expect(6).toEqual(Sum(1,2,3));
    });
});