export default class vDeliveryPlain {
    lblTotalMoto;
    lblTotalBici;
    lblPromedioEnvio;
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
    }
    onNuevoMoto(callback) {
        this.btNuevoMoto.onclick = callback;
    }
    onNuevoBici(callback) {
        this.btNuevoBici.onclick = callback;
    }
    reportar({ totalMoto, totalBici, promedioEnvio }) {
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
//# sourceMappingURL=vDelivery.js.map