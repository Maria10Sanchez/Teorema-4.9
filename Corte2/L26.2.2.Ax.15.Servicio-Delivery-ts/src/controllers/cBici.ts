import {iBici} from "../interfaces/iBici.js";
import mBici from "../models/mBici.js";

export default class cBici {
    private vista: iBici;
    private callback!: (bici:mBici | null) => void;

    constructor(vista:iBici) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarBici(callback: (bici:mBici | null) => void):void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick():void {
        this.callback(
            new mBici({
                guia: this.vista.guia,
                montoPedido: this.vista.montoPedido,
                bolsaTerm: this.vista.bolsaTerm,
                horaPico: this.vista.horaPico,
            }),
        );
        this.vista.ocultar();
    }

    private btCancelarOnClick():void {
        this.callback(null);
        this.vista.ocultar();
    }
}