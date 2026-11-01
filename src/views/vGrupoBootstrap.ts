import {iGrupo} from "../interfaces/iGrupo.js";

export default class vGrupoBootstrap implements iGrupo {
    private lblCalcularPromedio: HTMLElement;
    private lblObtenerIngresoMenor: HTMLElement;
    private btNuevaPersona: HTMLElement;

    constructor() {
        this.btNuevaPersona = document.getElementById("body_btNuevaPersona") as HTMLButtonElement;
        this.lblCalcularPromedio = document.getElementById("body_lblCalcularPromedio") as HTMLElement;
        this.lblObtenerIngresoMenor = document.getElementById("body_lblObtenerIngresoMenor") as HTMLElement;
    }

    onNuevaPersona(callback: () => void):void {
        this.btNuevaPersona.onclick = callback;
    }

    reportar({calcularPromedio, obtenerIngresoMenor}: {calcularPromedio: number,
         obtenerIngresoMenor: number}):void {
        this.lblCalcularPromedio.innerHTML = `${calcularPromedio}`;
        this.lblObtenerIngresoMenor.innerHTML = `${obtenerIngresoMenor}`;
    }
}