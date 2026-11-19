import {iMoto} from "../interfaces/iMoto.js";
import mMoto from "../models/mMoto.js";

export default class cMoto {
    private vista: iMoto;
    private callback!: (moto:mMoto | null) => void;

    constructor(vista:iMoto) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarMoto(callback: (moto:mMoto | null) => void):void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick():void {
        this.callback(
            new mMoto({
                guia: this.vista.guia,
                montoPedido: this.vista.montoPedido,
                kilometro: this.vista.kilometro,
            }),
        );
        this.vista.ocultar();
    }

    private btCancelarOnClick():void {
        this.callback(null);
        this.vista.ocultar();
    }
}