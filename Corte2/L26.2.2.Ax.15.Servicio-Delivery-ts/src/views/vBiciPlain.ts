import {iBici} from "../interfaces/iBici.js";

export default class vBiciPlain implements iBici {
    private inGuia: HTMLInputElement;
    private inMontoPedido: HTMLInputElement;
    private inBolsaTerm: HTMLInputElement;
    private inHoraPico: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("bici") as HTMLElement;
        this.inGuia = document.getElementById("bici_inGuia") as HTMLInputElement;
        this.inMontoPedido = document.getElementById("bici_inMontoPedido") as HTMLInputElement;
        this.inBolsaTerm = document.getElementById("bici_inBolsaTerm") as HTMLInputElement;
        this.inHoraPico = document.getElementById("bici_inHoraPico") as HTMLInputElement;
        this.btAceptar = document.getElementById("bici_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("bici_btCancelar") as HTMLButtonElement;
    }

    get guia():string {
        return this.inGuia.value.trim();
    }

    get montoPedido():number {
        return this.inMontoPedido ? + this.inMontoPedido.value: 0;
    }

    get bolsaTerm():boolean {
        return this.inBolsaTerm ? this.inBolsaTerm.checked: false;
    }

    get horaPico():boolean {
        return this.inHoraPico ? this.inHoraPico.checked: false;
    }

    onAceptar(callback: () => void):void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void):void {
        this.btCancelar.onclick = callback;
    }

    mostrar():void {
        if(this.vista === null) return;

        this.inGuia.value = "";
        this.inMontoPedido.value = "";
        this.inBolsaTerm.value = "";
        this.inHoraPico.value = "";
        this.vista.hidden = false;
    }

    ocultar():void {
        if(this.vista === null) return;

        this.vista.hidden = true;
    }
}