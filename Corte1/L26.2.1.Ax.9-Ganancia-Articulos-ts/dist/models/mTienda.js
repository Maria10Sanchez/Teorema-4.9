export default class mTienda {
    acumGanancia = 0;
    mayPrecio = 0;
    codMayor = 0;
    constructor() {
        this.acumGanancia = 0;
        this.mayPrecio = 0;
        this.codMayor = 0;
    }
    procesarArticulo(a) {
        // 1. Acumular ganancia de cada articulo
        this.acumGanancia += a.ganancia;
        // 2. Determinar el codigo del articulo con mayor precio de venta
        if (a.precio > this.mayPrecio) {
            this.mayPrecio = a.precio;
            this.codMayor = a.codigo;
        }
    }
    gananciaTotal() {
        return this.acumGanancia;
    }
    codigoMayorPrecio() {
        return this.codMayor;
    }
}
//# sourceMappingURL=mTienda.js.map