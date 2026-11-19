//Vista Bootstrap de Seccion (Clase Mayor)
import {iSeccion} from "../interfaces/iSeccion.js";

export default class vCursoBootstrap implements iSeccion {
    private lblNotaPromedio: HTMLElement; //Prefijo lbl de label
    private lblEstudiantesAprobados: HTMLElement;
    private lblEstudianteReprobado: HTMLElement;
    private btNuevoEstudiante: HTMLButtonElement;

    constructor() {
        this.btNuevoEstudiante = document.getElementById("body_btNuevoEstudiante") as HTMLButtonElement;
        this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio") as HTMLElement;
        this.lblEstudiantesAprobados = document.getElementById("body_lblEstudiantesAprobados") as HTMLElement;
        this.lblEstudianteReprobado = document.getElementById("body_lblEstudiantesReprobados") as HTMLElement;
    }

    onNuevoEstudiante(callback: () => void):void {
        this.btNuevoEstudiante.onclick = callback;
    }

    reportar({notaPromedio, estudiantesAprobados, estudiantesReprobados}: {notaPromedio:number,
         estudiantesAprobados:number, estudiantesReprobados:number}):void {
        this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
        this.lblEstudiantesAprobados.innerHTML = `${estudiantesAprobados}`;
        this.lblEstudianteReprobado.innerHTML = `${estudiantesReprobados}`;
    }
}