//Metodo Envio (Clase menor)
export default class mEnvio {
    private _guia: string = "";
    private _montoPedido: number = 0;

    constructor({guia, montoPedido}: {guia:string, montoPedido:number}) {
        this.guia = guia;
        this.montoPedido = montoPedido;
    }

//Número de Guía
    set guia(guia:string) {
        this._guia = guia;
    }
    get guia() {
        return this._guia;
    }

//Monto del Pedido
    set montoPedido(montoPedido:number) {
        this._montoPedido =+ montoPedido;
    }
    get montoPedido() {
        return this._montoPedido;
    }

//Tarifa Base de Envio
    get tarifaBase() {
        return 2;
    }
}