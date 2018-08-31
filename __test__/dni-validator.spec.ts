import { DNIValidator } from "../src/dni-validator";

describe('DNI validator tests', () => {
    function assertValidity(dni: string, expectedIsValid: boolean){
        expect(DNIValidator.validate( dni)).toBe(expectedIsValid);
    }
    it('A correct DNI is valid', () => {
        assertValidity('44650684W', true);
    });

    it('A DNI with less than 9 characters is not valid', () => {
        assertValidity('111W', false);
    });

});
