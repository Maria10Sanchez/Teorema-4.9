//Modelo Bici
import mEnvio from "./mEnvio.js";
export default class mBici extends mEnvio {
    _bolsaTerm = false;
    _horaPico = false;
    constructor({ guia, montoPedido, bolsaTerm, horaPico }) {
        super({ guia, montoPedido });
        this.bolsaTerm = bolsaTerm;
        this.horaPico = horaPico;
    }
    //Bolsa Termica
    set bolsaTerm(bolsaTerm) {
        this._bolsaTerm = bolsaTerm;
    }
    get bolsaTerm() {
        return this._bolsaTerm;
    }
    //Hora Pico
    set horaPico(horaPico) {
        this._horaPico = horaPico;
    }
    get horaPico() {
        return this._horaPico;
    }
    //Metodos
    tarifaBolsa() {
        if (this.bolsaTerm === true) {
            return 1;
        }
        else {
            return 0;
        }
    }
    tarifaHora() {
        if (this.horaPico === true) {
            return 1.25;
        }
        else {
            return 0;
        }
    }
    montoEnvio() {
        return this.tarifaBase + this.tarifaBolsa() + this.tarifaHora();
    }
}
//# sourceMappingURL=mBici.js.map