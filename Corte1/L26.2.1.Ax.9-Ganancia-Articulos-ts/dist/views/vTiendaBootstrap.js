export default class vTiendaBootstrap {
    lblGananciaTotal;
    lblCodigoMayorPrecio;
    btNuevoArticulo;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblGananciaTotal = document.getElementById("body_lblGananciaTotal");
        this.lblCodigoMayorPrecio = document.getElementById("body_lblCodigoMayorPrecio");
    }
    onNuevoArticulo(callback) {
        this.btNuevoArticulo.onclick = callback;
    }
    reportar({ gananciaTotal, codigoMayorPrecio, }) {
        this.lblGananciaTotal.innerHTML = `${gananciaTotal}$`;
        this.lblCodigoMayorPrecio.innerHTML = `${codigoMayorPrecio}`;
    }
}
//# sourceMappingURL=vTiendaBootstrap.js.map