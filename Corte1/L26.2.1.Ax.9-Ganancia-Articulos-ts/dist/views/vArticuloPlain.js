export default class vArticuloPlain {
    inCodigo;
    inCosto;
    inPrecio;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("articulo");
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inPrecio = document.getElementById("articulo_inPrecio");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
    }
    get codigo() {
        return this.inCodigo ? +this.inCodigo.value : 0;
    }
    get costo() {
        return this.inCosto ? +this.inCosto.value : 0;
    }
    get precio() {
        return this.inPrecio ? +this.inPrecio.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inPrecio.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vArticuloPlain.js.map