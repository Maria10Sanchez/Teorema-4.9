import {iDelivery} from "../interfaces/iDelivery.js";

export default class vDeliveryPlain implements iDelivery {
    private lblTotalMoto: HTMLElement;
    private lblTotalBici: HTMLElement;
    private lblPromedioEnvio: HTMLElement;
    private lblNumeroGuia: HTMLElement;
    private btNuevoMoto: HTMLButtonElement;
    private btNuevoBici: HTMLButtonElement;
    private vista: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoMoto = document.getElementById("body_btNuevoMoto") as HTMLButtonElement;
        this.btNuevoBici = document.getElementById("body_btNuevoBici") as HTMLButtonElement;
        this.lblTotalMoto = document.getElementById("body_lblTotalMoto") as HTMLElement;
        this.lblTotalBici = document.getElementById("body_lblTotalBici") as HTMLElement;
        this.lblPromedioEnvio = document.getElementById("body_lblPromedioEnvio") as HTMLElement;
        this.lblNumeroGuia = document.getElementById("body_lblNumeroGuia") as HTMLElement;
    }

    onNuevoMoto(callback: () => void):void {
        this.btNuevoMoto.onclick = callback;
    }

    onNuevoBici(callback: () => void):void {
        this.btNuevoBici.onclick = callback;
    }

    reportar({guia, montoEnvio, totalMoto, totalBici, promedioEnvio}: {guia:string, montoEnvio:number,
         totalMoto:number, totalBici:number,
         promedioEnvio:number}):void {
            this.lblNumeroGuia.innerHTML += `<div>Guía ${guia} ${montoEnvio}</div>`;
            this.lblTotalMoto.innerHTML = `${totalMoto}`;
            this.lblTotalBici.innerHTML = `${totalBici}`;
            this.lblPromedioEnvio.innerHTML = `${promedioEnvio}`;
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
