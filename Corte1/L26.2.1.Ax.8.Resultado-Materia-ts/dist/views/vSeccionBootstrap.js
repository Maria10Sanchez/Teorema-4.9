export default class vCursoBootstrap {
    lblNotaPromedio; //Prefijo lbl de label
    lblEstudiantesAprobados;
    lblEstudianteReprobado;
    btNuevoEstudiante;
    constructor() {
        this.btNuevoEstudiante = document.getElementById("body_btNuevoEstudiante");
        this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio");
        this.lblEstudiantesAprobados = document.getElementById("body_lblEstudiantesAprobados");
        this.lblEstudianteReprobado = document.getElementById("body_lblEstudiantesReprobados");
    }
    onNuevoEstudiante(callback) {
        this.btNuevoEstudiante.onclick = callback;
    }
    reportar({ notaPromedio, estudiantesAprobados, estudiantesReprobados }) {
        this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
        this.lblEstudiantesAprobados.innerHTML = `${estudiantesAprobados}`;
        this.lblEstudianteReprobado.innerHTML = `${estudiantesReprobados}`;
    }
}
//# sourceMappingURL=vSeccionBootstrap.js.map