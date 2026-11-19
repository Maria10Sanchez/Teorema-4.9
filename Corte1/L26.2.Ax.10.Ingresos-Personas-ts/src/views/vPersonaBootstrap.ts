import {iPersona} from "../interfaces/iPersona.js";
declare var bootstrap:any;

export default class vPersonaBootstrap implements iPersona {
    private inNombre: HTMLInputElement;
    private inIngreso: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private modal: any;

    constructor() {
        this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
        this.inIngreso = document.getElementById("persona_inIngreso") as HTMLInputElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        const elementoModal = document.getElementById("persona");
        this.modal = new bootstrap.Modal(elementoModal);
    }

    get nombre():string {
        return this.inNombre.value.trim();
    }

    get ingreso():number {
        return this.inIngreso ? + this.inIngreso.value: 0;
    }

    onAceptar(callback: () => void):void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void):void {
        this.btCancelar.onclick = callback;
    }

    mostrar():void {
        this.inNombre.value = "";
        this.inIngreso.value = "";
        this.modal.show();
    }

    ocultar():void {
        this.modal.hide();
    }
}