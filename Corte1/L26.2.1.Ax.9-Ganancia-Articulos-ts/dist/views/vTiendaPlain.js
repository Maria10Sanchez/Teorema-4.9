export default class vTiendaPlain {
    lblGananciaTotal;
    lblCodigoMayorPrecio;
    btNuevoArticulo;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
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
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vTiendaPlain.js.map