export default class vEstudianteBootstrap {
    inCedula;
    inNotaFinal;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inCedula = document.getElementById("estudiante_inCedula");
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal");
        this.btAceptar = document.getElementById("estudiante_btAceptar");
        this.btCancelar = document.getElementById("estudiante_btCancelar");
        const elementoModal = document.getElementById("estudiante");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.inCedula.value = "";
        this.inNotaFinal.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vEstudianteBootstrap.js.map