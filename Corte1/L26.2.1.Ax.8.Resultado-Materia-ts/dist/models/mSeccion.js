export default class mSeccion {
    cntAprobados = 0;
    cntReprobados = 0;
    cntEstudiantes = 0;
    acmNotasFinales = 0;
    constructor() {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.cntEstudiantes = 0;
        this.acmNotasFinales = 0;
    }
    //Procesar Estudiantes
    procesarEstudiante(estudiante) {
        //Contador de Aprobados y Reprobados
        if (estudiante.notaFinal >= 48) {
            this.cntAprobados++;
        }
        else {
            this.cntReprobados++;
        }
        //Contar Estudiantes
        this.cntEstudiantes++;
        //Acumular las notas
        this.acmNotasFinales += estudiante.notaFinal;
    }
    //Metodo
    notaPromedio() {
        if (this.cntEstudiantes > 0) {
            return this.acmNotasFinales / this.cntEstudiantes;
        }
        else {
            return 0;
        }
    }
    estudiantesAprobados() {
        return this.cntAprobados;
    }
    estudiantesReprobados() {
        return this.cntReprobados;
    }
}
//# sourceMappingURL=mSeccion.js.map