import mEstudiante from "../models/mEstudiante.js";
export default class cEstudiante {
    vista;
    //Funcion de retorno que se activara cuando se termine de interactuar
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick()); //El prefijo bt es de boton
    }
    solicitarEstudiante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        this.callback(new mEstudiante({
            cedula: this.vista.cedula,
            notaFinal: this.vista.notaFinal,
        }));
        this.vista.ocultar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cEstudiante.js.map