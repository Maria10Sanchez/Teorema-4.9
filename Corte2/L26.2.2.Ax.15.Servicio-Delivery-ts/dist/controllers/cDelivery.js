import mDelivery from "../models/mDelivery.js";
export default class cDelivery {
    mDelivery = new mDelivery();
    vDelivery;
    cMoto;
    cBici;
    constructor(vistaDelivery, controladorMoto, controladorBici) {
        this.vDelivery = vistaDelivery;
        this.cMoto = controladorMoto;
        this.cBici = controladorBici;
        this.vDelivery.onNuevoMoto(() => this.procesar1Moto());
        this.vDelivery.onNuevoBici(() => this.procesar1Bici());
    }
    procesar1Bici() {
        this.cBici.solicitarBici((bici) => {
            if (bici !== null) {
                this.mDelivery.procesarEnvio(bici);
                this.vDelivery.reportar({
                    guia: bici.guia,
                    montoEnvio: bici.montoEnvio(),
                    totalMoto: this.mDelivery.totalMoto(),
                    totalBici: this.mDelivery.totalBici(),
                    promedioEnvio: this.mDelivery.promedioEnvio()
                });
            }
        });
    }
    procesar1Moto() {
        this.cMoto.solicitarMoto((moto) => {
            if (moto !== null) {
                this.mDelivery.procesarEnvio(moto);
                this.vDelivery.reportar({
                    guia: moto.guia,
                    montoEnvio: moto.montoEnvio(moto),
                    totalMoto: this.mDelivery.totalMoto(),
                    totalBici: this.mDelivery.totalBici(),
                    promedioEnvio: this.mDelivery.promedioEnvio()
                });
            }
        });
    }
}
//# sourceMappingURL=cDelivery.js.map