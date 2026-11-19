//Modelo de Grupo (Clase Mayor)
import mPersona from "./mPersona.js"

export default class mGrupo {
    private acmIngreso:number = 0;
    private cntPersona:number = 0;
    private ingresoMenor:number = 0;

    constructor() {
        this.acmIngreso = 0;
        this.cntPersona = 0;
        this.ingresoMenor = Infinity;
    }

//Procesar Persona
    procesarPersona(persona:mPersona):void {
        //Acumulador de Ingreso
        this.acmIngreso += persona.ingreso;

        //Contador Persona
        this.cntPersona++;

        //Menor ingreso
        if(persona.ingreso < this.ingresoMenor) {
            this.ingresoMenor = persona.ingreso;
        }
    }

//Metodo
    calcularPromedio():number {
        if(this.cntPersona > 0) {
            return this.acmIngreso / this.cntPersona;
        } else {
            return 0;
        }
    }

    obtenerIngresoMenor():number {
        return this.ingresoMenor;
    }
}