import {generateSID} from './generate-sid.function';

describe('MACCommon/functions/generate-sid.function', () => {
    it('generates sid with 32 symbols by default', () => {
        expect(generateSID().length).toBe(32);
    });

    it('generates sid with given length', () => {
        expect(generateSID(1).length).toBe(1);
        expect(generateSID(2).length).toBe(2);
        expect(generateSID(10).length).toBe(10);
    });

    it('generated sid contains only hex code', () => {
        for (let i: number = 0; i < 100; i++) {
            expect(generateSID(1)).toMatch(/^[abcdef0-9]+$/g);
            expect(generateSID(2)).toMatch(/^[abcdef0-9]+$/g);
            expect(generateSID(100)).toMatch(/^[abcdef0-9]+$/g);
        }
    });

    it('throws error on invalid length', () => {
        for (let input of [0, -1, -1.25]) {
            expect(() => {
                generateSID(input);
            }).toThrowError();
        }
    });
});
