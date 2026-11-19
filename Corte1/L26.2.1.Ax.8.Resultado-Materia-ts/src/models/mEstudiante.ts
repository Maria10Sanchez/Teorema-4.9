//Modelo de Estudiante (Clase menor)
export default class mEstudiante {
    private _cedula:number = 0;
    private _notaFinal:number = 0;
    
    constructor({cedula, notaFinal}: {cedula:number, notaFinal:number}) {
        this.cedula = cedula;
        this.notaFinal = notaFinal;
    }

//Cedula del Estudiante
    set cedula(cedula) {
        this._cedula =+ cedula;
    }
    get cedula() {
        return this._cedula;
    }

//Nota Final
    set notaFinal(notaFinal) {
        this._notaFinal =+ notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}