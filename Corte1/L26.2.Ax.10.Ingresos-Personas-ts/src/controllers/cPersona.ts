//Controlador de Persona (Clase menor)
import {iPersona} from "../interfaces/iPersona.js"
import mPersona from "../models/mPersona.js"

export default class cPersona {
    private vista: iPersona;
    private callback!: (persona:mPersona | null) => void;

    constructor(vista:iPersona) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarPersona(callback: (persona:mPersona | null) => void):void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick():void {
        this.callback(
            new mPersona({
                nombre: this.vista.nombre,
                ingreso: this.vista.ingreso,
            }),
        );
        this.vista.ocultar();
    }

    private btCancelarOnClick():void {
        this.callback(null);
        this.vista.ocultar();
    }
}