export default class mArticulo {
    _codigo = 0;
    _costo = 0;
    _precio = 0;
    constructor({ codigo, costo, precio, }) {
        this.codigo = codigo;
        this.costo = costo;
        this.precio = precio;
    }
    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    get ganancia() {
        return this.precio - this.costo;
    }
}
//# sourceMappingURL=mArticulo.js.map