export default class vGrupoPlain {
    lblCalcularPromedio;
    lblObtenerIngresoMenor;
    btNuevaPersona;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
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
//# sourceMappingURL=vGrupoPlain.js.map