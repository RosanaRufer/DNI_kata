import { DNIValidator } from "../src/dni-validator";

describe('DNI validator tests', () => {

    it('A correct DNI is valid', () => {
        // Arragne
        const validDNI = '44650684W';

        // Act
        let isValid = DNIValidator.validate(validDNI);

        // Assert
        expect(isValid).toBe(true);
    });

});
