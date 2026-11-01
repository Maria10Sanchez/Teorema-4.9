export default class vGrupoBootstrap {
    lblCalcularPromedio;
    lblObtenerIngresoMenor;
    btNuevaPersona;
    constructor() {
        this.btNuevaPersona = document.getElementById("body_btNuevaPersona");
        this.lblCalcularPromedio = document.getElementById("body_lblCalcularPromedio");
        this.lblObtenerIngresoMenor = document.getElementById("body_lblObtenerIngresoMenor");
    }
    onNuevaPersona(callback) {
        this.btNuevaPersona.onclick = callback;
    }
    reportar({ calcularPromedio, obtenerIngresoMenor }) {
        this.lblCalcularPromedio.innerHTML = `${calcularPromedio}`;
        this.lblObtenerIngresoMenor.innerHTML = `${obtenerIngresoMenor}`;
    }
}
//# sourceMappingURL=vGrupoBootstrap.js.map