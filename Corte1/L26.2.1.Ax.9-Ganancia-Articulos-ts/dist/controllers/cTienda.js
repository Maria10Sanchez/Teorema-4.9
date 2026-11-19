/**
 * GANANCIA ARTÍCULOS
 * Conociendo el código, costo y el precio de venta de los artí­culos que vende una tienda,
 * se desea hacer un procesamiento que determine la ganancia total que tendrá la empresa
 * al venderlos todos, y también el código del artículo con mayor precio de venta.
 */
import mTienda from "../models/mTienda.js";
export default class cTienda {
    mTienda = new mTienda();
    vTienda;
    cArticulo;
    constructor(vistaTienda, controladorArticulo) {
        this.vTienda = vistaTienda;
        this.cArticulo = controladorArticulo;
        this.vTienda.onNuevoArticulo(() => this.procesar1Articulo());
    }
    procesar1Articulo() {
        this.cArticulo.solicitarArticulo((articulo) => {
            if (articulo !== null) {
                this.mTienda.procesarArticulo(articulo);
                this.vTienda.reportar({
                    gananciaTotal: this.mTienda.gananciaTotal(),
                    codigoMayorPrecio: this.mTienda.codigoMayorPrecio(),
                });
            }
        });
    }
}
//# sourceMappingURL=cTienda.js.map