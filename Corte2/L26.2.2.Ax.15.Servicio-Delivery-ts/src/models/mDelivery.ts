//Modelo Delivery (Clase Mayor)
import mMoto from "./mMoto.js";
import mBici from "./mBici.js";
import mEnvio from "./mEnvio.js";

export default class mDelivery {
    private acmMoto:number = 0;
    private acmBici:number = 0;
    private cntEnvios:number = 0;

    procesarEnvio(envio:mEnvio): void {
        if(envio instanceof mMoto) {
            //Acumular monto de Moto
            this.acmMoto += envio.montoEnvio(envio);

            //Contar Envios
            this.cntEnvios++;

        } else if (envio instanceof mBici) {
            //Acumular monto Bici
            this.acmBici += envio.montoEnvio();

            //Contar Envios
            this.cntEnvios++;
        }
    }

//Metodos
    totalMoto():number {
        return this.acmMoto;
    }

    totalBici():number {
        return this.acmBici;
    }

    promedioEnvio():number {
        if(this.cntEnvios > 0) {
            return (this.totalMoto() + this.totalBici()) / this.cntEnvios;
        } else {
            return 0;
        }
    }
}