export default class vPersonaBootstrap {
    inNombre;
    inIngreso;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("persona_inNombre");
        this.inIngreso = document.getElementById("persona_inIngreso");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
        const elementoModal = document.getElementById("persona");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get ingreso() {
        return this.inIngreso ? +this.inIngreso.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inIngreso.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vPersonaBootstrap.js.map