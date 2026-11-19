//Metodo Moto
import mEnvio from "./mEnvio.js";
export default class mMoto extends mEnvio {
    _kilometro = 0;
    constructor({ guia, montoPedido, kilometro }) {
        super({ guia, montoPedido });
        this.kilometro = kilometro;
    }
    //Kilometro
    set kilometro(kilometro) {
        this._kilometro = kilometro;
    }
    get kilometro() {
        return this._kilometro;
    }
    //Metodo
    kilometroRecorrido() {
        return this.kilometro * 0.50;
    }
    tarifaEnvio() {
        return this.tarifaBase + this.kilometroRecorrido();
    }
    montoEnvio(envio) {
        if (envio.montoPedido > 25) {
            return this.tarifaEnvio() - 1.50;
        }
        else {
            return this.tarifaEnvio();
        }
    }
}
//# sourceMappingURL=mMoto.js.map