//Modelo Delivery (Clase Mayor)
import mMoto from "./mMoto.js";
import mBici from "./mBici.js";
export default class mDelivery {
    acmMoto = 0;
    acmBici = 0;
    cntEnvios = 0;
    procesarEnvio(envio) {
        if (envio instanceof mMoto) {
            //Acumular monto de Moto
            this.acmMoto += envio.montoEnvio(envio);
            //Contar Envios
            this.cntEnvios++;
        }
        else if (envio instanceof mBici) {
            //Acumular monto Bici
            this.acmBici += envio.montoEnvio();
            //Contar Envios
            this.cntEnvios++;
        }
    }
    //Metodos
    totalMoto() {
        return this.acmMoto;
    }
    totalBici() {
        return this.acmBici;
    }
    promedioEnvio() {
        if (this.cntEnvios > 0) {
            return (this.totalMoto() + this.totalBici()) / this.cntEnvios;
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=mDelivery.js.map