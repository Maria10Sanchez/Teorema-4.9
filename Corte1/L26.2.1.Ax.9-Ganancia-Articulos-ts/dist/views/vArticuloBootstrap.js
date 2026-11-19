export default class vArticuloBootstrap {
    inCodigo;
    inCosto;
    inPrecio;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inPrecio = document.getElementById("articulo_inPrecio");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        const elementoModal = document.getElementById("articulo");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inPrecio.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vArticuloBootstrap.js.map