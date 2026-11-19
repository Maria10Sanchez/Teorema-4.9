//Controlador de Seccion (Clase menor)
import mSeccion from "../models/mSeccion.js";
import {iSeccion} from "../interfaces/iSeccion.js";
import cEstudiante from "./cEstudiante.js";

export default class cSeccion {
    private mSeccion: mSeccion = new mSeccion();
    private vSeccion: iSeccion;
    private cEstudiante: cEstudiante;
    
    constructor(vistaSeccion: iSeccion, controladorEstudiante: cEstudiante) {
        this.vSeccion = vistaSeccion;
        this.cEstudiante = controladorEstudiante;

        this.vSeccion.onNuevoEstudiante(() => this.procesar1Estudiante());
    }

    private procesar1Estudiante():void {
        this.cEstudiante.solicitarEstudiante((estudiante) => {
            if(estudiante !== null) {
                this.mSeccion.procesarEstudiante(estudiante);
                this.vSeccion.reportar({notaPromedio: this.mSeccion.notaPromedio(),
                    estudiantesAprobados: this.mSeccion.estudiantesAprobados(),
                    estudiantesReprobados: this.mSeccion.estudiantesReprobados()});
            }
        });
    }
}