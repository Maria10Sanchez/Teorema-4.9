//Controlador de Seccion (Clase menor)
import mSeccion from "../models/mSeccion.js";
export default class cSeccion {
    mSeccion = new mSeccion();
    vSeccion;
    cEstudiante;
    constructor(vistaSeccion, controladorEstudiante) {
        this.vSeccion = vistaSeccion;
        this.cEstudiante = controladorEstudiante;
        this.vSeccion.onNuevoEstudiante(() => this.procesar1Estudiante());
    }
    procesar1Estudiante() {
        this.cEstudiante.solicitarEstudiante((estudiante) => {
            if (estudiante !== null) {
                this.mSeccion.procesarEstudiante(estudiante);
                this.vSeccion.reportar({ notaPromedio: this.mSeccion.notaPromedio(),
                    estudiantesAprobados: this.mSeccion.estudiantesAprobados(),
                    estudiantesReprobados: this.mSeccion.estudiantesReprobados() });
            }
        });
    }
}
//# sourceMappingURL=cSeccion.js.map