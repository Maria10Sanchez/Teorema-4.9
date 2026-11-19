//Vista Plain de Estudiante (Clase menor)
import {iEstudiante} from "../interfaces/iEstudiante.js";

export default class vEstudiantePlain implements iEstudiante {
    private inCedula: HTMLInputElement;
    private inNotaFinal: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("estudiante") as HTMLElement;
        this.inCedula = document.getElementById("estudiante_inCedula") as HTMLInputElement;
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal") as HTMLInputElement;
        this.btAceptar = document.getElementById("estudiante_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("estudiante_btCancelar") as HTMLButtonElement;
    }

    get cedula():number {
        return this.inCedula ? + this.inCedula.value: 0;
    }

    get notaFinal():number {
        return this.inNotaFinal ? + this.inNotaFinal.value: 0;
    }

    onAceptar(callback: () => void):void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void):void {
        this.btCancelar.onclick = callback;
    }

    mostrar():void {
        if(this.vista === null) return;
        
        this.inCedula.value = "";
        this.inNotaFinal.value = "";
        this.vista.hidden = false;
    }

    ocultar():void {
        if(this.vista === null) return;

        this.vista.hidden = true;
    }
}

