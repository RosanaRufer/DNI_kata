describe('DNI validator tests', () => {

    it('A correct DNI is valid', () => {
        // Arragne
        const validDNI = '44650684W';

        // Act
        let isValid = dniValidator.validate(validDNI);

        // Assert
        expect(isValid).toBe(true);
    });

});
