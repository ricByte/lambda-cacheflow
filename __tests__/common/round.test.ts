import { round2 } from '../../src/common/round';


describe('Test round20', () => {
    it('Should round to 0.00, When x < 0.25 ', () => {
        const value = 0.024;
        expect(round2(value)).toEqual(0.00);
    });it('Should round to 0.05, When 0.25 <= x <= 0.05 ', () => {
        const value = 0.025;
        expect(round2(value)).toEqual(0.05);
    });
    it('Should round to 0.05, When 0.05 < x < 0.75 ', () => {
        const value = 0.074;
        expect(round2(value)).toEqual(0.05);
    });
    it('Should round to 0.10, When 0.75 < x <= 1.00 ', () => {
        const value = 0.075;
        expect(round2(value)).toEqual(0.1);
    });
});
