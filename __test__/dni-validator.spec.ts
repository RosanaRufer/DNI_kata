import { DNIValidator } from "../src/dni-validator";

describe('DNI validator tests', () => {

    it('A correct DNI is valid', () => {
        // Arrange
        const validDNI = '44650684W';

        // Act
        let isValid = DNIValidator.validate(validDNI);

        // Assert
        expect(isValid).toBe(true);
    });

    it('A DNI with less than 9 characters is not valid', () => {
        // Arrange
        const invalidDNI = '111W';

        // Act
        let isValid = DNIValidator.validate(invalidDNI);

        // Assert
        expect(isValid).toBe(false);
    });

});
