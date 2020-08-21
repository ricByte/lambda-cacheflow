import { round2 } from '../../src/common/round';


describe('Test round20', () => {
    it('Should round to 0.05, When 0 < x <= 0.05 ', () => {
        const value = 0.049;
        expect(round2(value)).toEqual(0.05);
    });
    it('Should round to 0.10, When 0.05 < x < 0.1 ', () => {
        const value = 0.051;
        expect(round2(value)).toEqual(0.1);
    });
});
