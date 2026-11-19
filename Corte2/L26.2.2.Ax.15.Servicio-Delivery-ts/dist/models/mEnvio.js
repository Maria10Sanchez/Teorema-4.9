//Metodo Envio (Clase menor)
export default class mEnvio {
    _guia = "";
    _montoPedido = 0;
    constructor({ guia, montoPedido }) {
        this.guia = guia;
        this.montoPedido = montoPedido;
    }
    //Número de Guía
    set guia(guia) {
        this._guia = guia;
    }
    get guia() {
        return this._guia;
    }
    //Monto del Pedido
    set montoPedido(montoPedido) {
        this._montoPedido = +montoPedido;
    }
    get montoPedido() {
        return this._montoPedido;
    }
    //Tarifa Base de Envio
    get tarifaBase() {
        return 2;
    }
}
//# sourceMappingURL=mEnvio.js.map