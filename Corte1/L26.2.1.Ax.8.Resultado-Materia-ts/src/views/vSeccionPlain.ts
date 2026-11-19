//Vista Plain de Seccion (Clase Mayor)
import {iSeccion} from "../interfaces/iSeccion.js";

export default class vSeccionPlain implements iSeccion {
    private lblNotaPromedio: HTMLElement;
    private lblEstudiantesAprobados: HTMLElement;
    private lblEstudiantesReprobados: HTMLElement;
    private btNuevoEstudiante: HTMLButtonElement;
    private vista: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoEstudiante = document.getElementById("body_btNuevoEstudiante") as HTMLButtonElement;
        this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio") as HTMLElement;
        this.lblEstudiantesAprobados = document.getElementById("body_lblEstudiantesAprobados") as HTMLElement;
        this.lblEstudiantesReprobados = document.getElementById("body_lblEstudiantesReprobados") as HTMLElement;
    }

    onNuevoEstudiante(callback: () => void):void {
        this.btNuevoEstudiante.onclick = callback;
    }

    reportar({notaPromedio, estudiantesAprobados, estudiantesReprobados}: {notaPromedio:number,
         estudiantesAprobados:number, estudiantesReprobados:number}):void {
        this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
        this.lblEstudiantesAprobados.innerHTML = `${estudiantesAprobados}`;
        this.lblEstudiantesReprobados.innerHTML = `${estudiantesReprobados}`;
    }

    mostrar():void {
        if(this.vista === null) return;
        
        this.vista.hidden = false;
    }

    ocultar():void {
        if(this.vista === null) return;

        this.vista.hidden = true;
    }
}