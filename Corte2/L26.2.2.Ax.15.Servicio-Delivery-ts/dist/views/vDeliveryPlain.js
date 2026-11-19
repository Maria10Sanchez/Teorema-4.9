export default class vDeliveryPlain {
    lblTotalMoto;
    lblTotalBici;
    lblPromedioEnvio;
    lblNumeroGuia;
    btNuevoMoto;
    btNuevoBici;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoMoto = document.getElementById("body_btNuevoMoto");
        this.btNuevoBici = document.getElementById("body_btNuevoBici");
        this.lblTotalMoto = document.getElementById("body_lblTotalMoto");
        this.lblTotalBici = document.getElementById("body_lblTotalBici");
        this.lblPromedioEnvio = document.getElementById("body_lblPromedioEnvio");
        this.lblNumeroGuia = document.getElementById("body_lblNumeroGuia");
    }
    onNuevoMoto(callback) {
        this.btNuevoMoto.onclick = callback;
    }
    onNuevoBici(callback) {
        this.btNuevoBici.onclick = callback;
    }
    reportar({ guia, montoEnvio, totalMoto, totalBici, promedioEnvio }) {
        this.lblNumeroGuia.innerHTML += `<div>Guía ${guia} ${montoEnvio}</div>`;
        this.lblTotalMoto.innerHTML = `${totalMoto}`;
        this.lblTotalBici.innerHTML = `${totalBici}`;
        this.lblPromedioEnvio.innerHTML = `${promedioEnvio}`;
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
//# sourceMappingURL=vDeliveryPlain.js.map