//Modelo de Seccion (Clase Mayor)
import mEstudiante from "./mEstudiante.js" 

export default class mSeccion {
    private cntAprobados:number = 0;
    private cntReprobados:number = 0;
    private cntEstudiantes:number = 0;
    private acmNotasFinales:number = 0;

    constructor() {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.cntEstudiantes = 0;
        this.acmNotasFinales = 0;
    }

//Procesar Estudiantes
    procesarEstudiante(estudiante:mEstudiante):void {
        //Contador de Aprobados y Reprobados
        if(estudiante.notaFinal >= 48) {
            this.cntAprobados++;
        } else {
            this.cntReprobados++;
        }

        //Contar Estudiantes
        this.cntEstudiantes++;

        //Acumular las notas
        this.acmNotasFinales += estudiante.notaFinal;
    }

//Metodo
    notaPromedio():number {
        if(this.cntEstudiantes > 0) {
            return this.acmNotasFinales / this.cntEstudiantes;
        } else {
            return 0;
        }
    }

    estudiantesAprobados():number {
        return this.cntAprobados;
    }

    estudiantesReprobados():number {
        return this.cntReprobados;
    }
}