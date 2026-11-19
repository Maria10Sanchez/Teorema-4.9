import {iGrupo} from "../interfaces/iGrupo.js";

export default class vGrupoPlain implements iGrupo {
    private lblCalcularPromedio: HTMLElement;
    private lblObtenerIngresoMenor: HTMLElement;
    private btNuevaPersona: HTMLButtonElement;
    private vista: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevaPersona = document.getElementById("body_btNuevaPersona") as HTMLButtonElement;
        this.lblCalcularPromedio = document.getElementById("body_lblCalcularPromedio") as HTMLElement;
        this.lblObtenerIngresoMenor = document.getElementById("body_lblObtenerIngresoMenor") as HTMLElement;
    }

    onNuevaPersona(callback: () => void):void {
        this.btNuevaPersona.onclick = callback;
    }

    reportar({calcularPromedio, obtenerIngresoMenor}: {calcularPromedio:number,
         obtenerIngresoMenor:number}):void {
            this.lblCalcularPromedio.innerHTML = `${calcularPromedio}`;
            this.lblObtenerIngresoMenor.innerHTML = `${obtenerIngresoMenor}`;
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