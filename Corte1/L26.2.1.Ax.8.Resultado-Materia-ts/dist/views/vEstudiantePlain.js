export default class vEstudiantePlain {
    inCedula;
    inNotaFinal;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("estudiante");
        this.inCedula = document.getElementById("estudiante_inCedula");
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal");
        this.btAceptar = document.getElementById("estudiante_btAceptar");
        this.btCancelar = document.getElementById("estudiante_btCancelar");
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get notaFinal() {
        return this.inNotaFinal ? +this.inNotaFinal.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.inCedula.value = "";
        this.inNotaFinal.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vEstudiantePlain.js.map