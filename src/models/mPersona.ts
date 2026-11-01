//Modelo de Persona (Clase menor)
export default class mPersona {
    private _nombre:string = "";
    private _ingreso:number = 0;

    constructor({nombre, ingreso}: {nombre:string, ingreso:number}) {
        this.nombre = nombre;
        this.ingreso = ingreso;
    }

//Nombre de la Persona
    set nombre(nombre:string) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

//Ingreso de la Persona
    set ingreso(ingreso:number) {
        this._ingreso =+ ingreso;
    }
    get ingreso() {
        return this._ingreso;
    }
}