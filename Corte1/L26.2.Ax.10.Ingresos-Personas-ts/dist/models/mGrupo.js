export default class mGrupo {
    acmIngreso = 0;
    cntPersona = 0;
    ingresoMenor = 0;
    constructor() {
        this.acmIngreso = 0;
        this.cntPersona = 0;
        this.ingresoMenor = Infinity;
    }
    //Procesar Persona
    procesarPersona(persona) {
        //Acumulador de Ingreso
        this.acmIngreso += persona.ingreso;
        //Contador Persona
        this.cntPersona++;
        //Menor ingreso
        if (persona.ingreso < this.ingresoMenor) {
            this.ingresoMenor = persona.ingreso;
        }
    }
    //Metodo
    calcularPromedio() {
        if (this.cntPersona > 0) {
            return this.acmIngreso / this.cntPersona;
        }
        else {
            return 0;
        }
    }
    obtenerIngresoMenor() {
        return this.ingresoMenor;
    }
}
//# sourceMappingURL=mGrupo.js.map