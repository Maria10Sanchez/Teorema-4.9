//Controlador de Estudiante (Clase menor)
import {iEstudiante} from "../interfaces/iEstudiante.js";
import mEstudiante from "../models/mEstudiante.js";

export default class cEstudiante {
    private vista: iEstudiante;
    //Funcion de retorno que se activara cuando se termine de interactuar
    private callback!: (estudiante:mEstudiante | null) => void;

    constructor(vista:iEstudiante) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick()); //El prefijo bt es de boton
    }

    solicitarEstudiante(callback: (estudiante:mEstudiante | null) => void):void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick():void {
        this.callback(
            new mEstudiante({
                cedula: this.vista.cedula,
                notaFinal: this.vista.notaFinal,
            }),
        );
        this.vista.ocultar();
    }

    private btCancelarOnClick():void {
        this.callback(null);
        this.vista.ocultar();
    }
}