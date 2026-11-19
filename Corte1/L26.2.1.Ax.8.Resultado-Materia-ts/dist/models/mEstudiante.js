//Modelo de Estudiante (Clase menor)
export default class mEstudiante {
    _cedula = 0;
    _notaFinal = 0;
    constructor({ cedula, notaFinal }) {
        this.cedula = cedula;
        this.notaFinal = notaFinal;
    }
    //Cedula del Estudiante
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    //Nota Final
    set notaFinal(notaFinal) {
        this._notaFinal = +notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}
//# sourceMappingURL=mEstudiante.js.map