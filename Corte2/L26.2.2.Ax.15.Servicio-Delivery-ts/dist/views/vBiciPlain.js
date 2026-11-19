export default class vBiciPlain {
    inGuia;
    inMontoPedido;
    inBolsaTerm;
    inHoraPico;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("bici");
        this.inGuia = document.getElementById("bici_inGuia");
        this.inMontoPedido = document.getElementById("bici_inMontoPedido");
        this.inBolsaTerm = document.getElementById("bici_inBolsaTerm");
        this.inHoraPico = document.getElementById("bici_inHoraPico");
        this.btAceptar = document.getElementById("bici_btAceptar");
        this.btCancelar = document.getElementById("bici_btCancelar");
    }
    get guia() {
        return this.inGuia.value.trim();
    }
    get montoPedido() {
        return this.inMontoPedido ? +this.inMontoPedido.value : 0;
    }
    get bolsaTerm() {
        return this.inBolsaTerm ? this.inBolsaTerm.checked : false;
    }
    get horaPico() {
        return this.inHoraPico ? this.inHoraPico.checked : false;
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
        this.inBolsaTerm.value = "";
        this.inHoraPico.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vBiciPlain.js.map