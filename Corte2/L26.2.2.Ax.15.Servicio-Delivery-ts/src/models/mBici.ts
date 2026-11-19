//Modelo Bici
import mEnvio from "./mEnvio.js";

export default class mBici extends mEnvio {
    private _bolsaTerm:boolean = false;
    private _horaPico:boolean = false;

    constructor({
        guia,
        montoPedido,
        bolsaTerm,
        horaPico
    }:{
        guia:string,
        montoPedido:number,
        bolsaTerm:boolean,
        horaPico:boolean
    }) {
        super({guia, montoPedido});
            this.bolsaTerm = bolsaTerm;
            this.horaPico = horaPico;
        }
    
//Bolsa Termica
    set bolsaTerm(bolsaTerm:boolean) {
        this._bolsaTerm = bolsaTerm;
    }
    get bolsaTerm():boolean {
        return this._bolsaTerm;
    }

//Hora Pico
    set horaPico(horaPico:boolean) {
        this._horaPico = horaPico;
    }
    get horaPico():boolean {
        return this._horaPico;
    }

//Metodos
    tarifaBolsa():number {
        if(this.bolsaTerm === true) {
            return 1;
        } else {
            return 0;
        }
    }

    tarifaHora():number {
        if(this.horaPico === true) {
            return 1.25;
        } else {
            return 0;
        }
    }

    montoEnvio():number {
        return this.tarifaBase + this.tarifaBolsa() + this.tarifaHora();
    }
}