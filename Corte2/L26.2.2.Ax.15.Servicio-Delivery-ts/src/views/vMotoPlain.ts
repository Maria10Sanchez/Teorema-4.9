import {iMoto} from "../interfaces/iMoto.js";

export default class vMotoPlain implements iMoto {
    private inGuia: HTMLInputElement;
    private inMontoPedido: HTMLInputElement;
    private inKilometro: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("moto") as HTMLElement;
        this.inGuia = document.getElementById("moto_inGuia") as HTMLInputElement;
        this.inMontoPedido = document.getElementById("moto_inMontoPedido") as HTMLInputElement;
        this.inKilometro = document.getElementById("moto_inKilometro") as HTMLInputElement;
        this.btAceptar = document.getElementById("moto_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("moto_btCancelar") as HTMLButtonElement;
    }

    get guia():string {
        return this.inGuia.value.trim();
    }

    get montoPedido():number {
        return this.inMontoPedido ? + this.inMontoPedido.value: 0;
    }

    get kilometro():number {
        return this.inKilometro ? + this.inKilometro.value: 0;
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
        this.inKilometro.value = "";
        this.vista.hidden = false;
    }

    ocultar():void {
        if(this.vista === null) return;

        this.vista.hidden = true;
    }
}