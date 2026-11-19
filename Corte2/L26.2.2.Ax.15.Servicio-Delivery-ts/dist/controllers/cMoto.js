import mMoto from "../models/mMoto.js";
export default class cMoto {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarMoto(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        this.callback(new mMoto({
            guia: this.vista.guia,
            montoPedido: this.vista.montoPedido,
            kilometro: this.vista.kilometro,
        }));
        this.vista.ocultar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cMoto.js.map