import mDelivery from "../models/mDelivery.js";
import {iDelivery} from "../interfaces/iDelivery.js";
import cMoto from "./cMoto.js";
import cBici from "./cBici.js";

export default class cDelivery {
    private mDelivery: mDelivery = new mDelivery();
    private vDelivery: iDelivery;
    private cMoto: cMoto;
    private cBici: cBici;

    constructor(vistaDelivery: iDelivery, controladorMoto: cMoto, controladorBici: cBici) {
        this.vDelivery = vistaDelivery;
        this.cMoto = controladorMoto;
        this.cBici = controladorBici;

        this.vDelivery.onNuevoMoto(() => this.procesar1Moto());
        this.vDelivery.onNuevoBici(() => this.procesar1Bici());
    }

    private procesar1Bici():void {
        this.cBici.solicitarBici((bici) => {
            if(bici !== null) {
                this.mDelivery.procesarEnvio(bici);
                this.vDelivery.reportar({
                    guia: bici.guia,
                    montoEnvio: bici.montoEnvio(),
                    totalMoto: this.mDelivery.totalMoto(),
                    totalBici: this.mDelivery.totalBici(),
                    promedioEnvio: this.mDelivery.promedioEnvio()})
            }
        });
    }

    private procesar1Moto():void {
        this.cMoto.solicitarMoto((moto) => {
            if(moto !== null) {
                this.mDelivery.procesarEnvio(moto);
                this.vDelivery.reportar({
                    guia: moto.guia,
                    montoEnvio: moto.montoEnvio(moto),
                    totalMoto: this.mDelivery.totalMoto(),
                    totalBici: this.mDelivery.totalBici(),
                    promedioEnvio: this.mDelivery.promedioEnvio()})
            }
        });
    }
}