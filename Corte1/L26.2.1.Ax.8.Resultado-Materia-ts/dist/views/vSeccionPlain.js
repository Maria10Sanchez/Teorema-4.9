export default class vSeccionPlain {
    lblNotaPromedio;
    lblEstudiantesAprobados;
    lblEstudiantesReprobados;
    btNuevoEstudiante;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoEstudiante = document.getElementById("body_btNuevoEstudiante");
        this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio");
        this.lblEstudiantesAprobados = document.getElementById("body_lblEstudiantesAprobados");
        this.lblEstudiantesReprobados = document.getElementById("body_lblEstudiantesReprobados");
    }
    onNuevoEstudiante(callback) {
        this.btNuevoEstudiante.onclick = callback;
    }
    reportar({ notaPromedio, estudiantesAprobados, estudiantesReprobados }) {
        this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
        this.lblEstudiantesAprobados.innerHTML = `${estudiantesAprobados}`;
        this.lblEstudiantesReprobados.innerHTML = `${estudiantesReprobados}`;
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
//# sourceMappingURL=vSeccionPlain.js.map