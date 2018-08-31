import { DNIValidator } from "../src/dni-validator";

describe('DNI validator tests', () => {
    function assertValidity(dni: string, expectedIsValid: boolean){
        expect(DNIValidator.validate( dni)).toBe(expectedIsValid);
    }
    it('A correct DNI is valid', () => {
        assertValidity('44650684W', true);
    });

    it('A DNI that does not have exactly 9 characters is not valid', () => {
        assertValidity('111W', false);
        assertValidity('', false);
        assertValidity('------7A', false);
        assertValidity('--------9A', false);
    });

    it('A DNI that does not have 8 digits followed by a-z letter is not valid', () => {
        assertValidity('12345678-', false);
    });
});
