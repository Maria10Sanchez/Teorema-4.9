import mBici from "../models/mBici.js";
export default class cBici {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarBici(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        this.callback(new mBici({
            guia: this.vista.guia,
            montoPedido: this.vista.montoPedido,
            bolsaTerm: this.vista.bolsaTerm,
            horaPico: this.vista.horaPico,
        }));
        this.vista.ocultar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cBici.js.map