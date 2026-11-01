import mPersona from "../models/mPersona.js";
export default class cPersona {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarPersona(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        this.callback(new mPersona({
            nombre: this.vista.nombre,
            ingreso: this.vista.ingreso,
        }));
        this.vista.ocultar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cPersona.js.map