//Metodo Moto
import mEnvio from "./mEnvio.js";

export default class mMoto extends mEnvio {
    private _kilometro:number = 0;

    constructor({
        guia,
        montoPedido,
        kilometro
    }:{
        guia:string,
        montoPedido:number,
        kilometro:number
    }) {
        super({guia, montoPedido});
            this.kilometro = kilometro;
        }

//Kilometro
    set kilometro(kilometro:number) {
        this._kilometro = kilometro;
    }
    get kilometro():number {
        return this._kilometro;
    }

//Metodo
    kilometroRecorrido():number {
        return this.kilometro * 0.50
    }

    tarifaEnvio():number {
        return this.tarifaBase + this.kilometroRecorrido();
    }

    montoEnvio(envio:mEnvio):number {
        if(envio.montoPedido > 25) {
            return this.tarifaEnvio() - 1.50;
        } else {
            return this.tarifaEnvio();
        }
    }
}