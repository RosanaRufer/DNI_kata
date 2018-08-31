export class DNIValidator {

    static validate(dni: string):boolean {
        if (dni.length === 9) {
            return true;
        }
        return false;
    }
}
