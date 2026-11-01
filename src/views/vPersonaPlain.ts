import {iPersona} from "../interfaces/iPersona.js";

export default class vPersonaPlain implements iPersona {
    private inNombre: HTMLInputElement;
    private inIngreso: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("persona") as HTMLElement;
        this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
        this.inIngreso = document.getElementById("persona_inIngreso") as HTMLInputElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
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
        if(this.vista === null) return;

        this.inNombre.value = "";
        this.inIngreso.value = "";
        this.vista.hidden = false;
    }

    ocultar():void {
        if(this.vista === null) return;

        this.vista.hidden = true;
    }
}