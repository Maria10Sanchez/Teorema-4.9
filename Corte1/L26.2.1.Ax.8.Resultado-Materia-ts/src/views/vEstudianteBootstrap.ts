//Vista Bootstrap de Estudiante (Clase menor)
import {iEstudiante} from "../interfaces/iEstudiante.js";
declare var bootstrap:any;

export default class vEstudianteBootstrap implements iEstudiante {
    private inCedula: HTMLInputElement;
    private inNotaFinal: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private modal: any;

    constructor() {
        this.inCedula = document.getElementById("estudiante_inCedula") as HTMLInputElement;
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal") as HTMLInputElement;
        this.btAceptar = document.getElementById("estudiante_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("estudiante_btCancelar") as HTMLButtonElement;
        const elementoModal = document.getElementById("estudiante");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.inCedula.value = "";
        this.inNotaFinal.value = "";
        this.modal.show();
    }

    ocultar():void {
        this.modal.hide();
    }
}