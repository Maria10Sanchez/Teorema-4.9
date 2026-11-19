export default class vMotoPlain {
    inGuia;
    inMontoPedido;
    inKilometro;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("moto");
        this.inGuia = document.getElementById("moto_inGuia");
        this.inMontoPedido = document.getElementById("moto_inMontoPedido");
        this.inKilometro = document.getElementById("moto_inKilometro");
        this.btAceptar = document.getElementById("moto_btAceptar");
        this.btCancelar = document.getElementById("moto_btCancelar");
    }
    get guia() {
        return this.inGuia.value.trim();
    }
    get montoPedido() {
        return this.inMontoPedido ? +this.inMontoPedido.value : 0;
    }
    get kilometro() {
        return this.inKilometro ? +this.inKilometro.value : 0;
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
        this.inGuia.value = "";
        this.inMontoPedido.value = "";
        this.inKilometro.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vMotoPlain.js.map