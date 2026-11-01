//Modelo de Persona (Clase menor)
export default class mPersona {
    _nombre = "";
    _ingreso = 0;
    constructor({ nombre, ingreso }) {
        this.nombre = nombre;
        this.ingreso = ingreso;
    }
    //Nombre de la Persona
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    //Ingreso de la Persona
    set ingreso(ingreso) {
        this._ingreso = +ingreso;
    }
    get ingreso() {
        return this._ingreso;
    }
}
//# sourceMappingURL=mPersona.js.map