export default class vPersonaPlain {
    inNombre;
    inIngreso;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inNombre = document.getElementById("persona_inNombre");
        this.inIngreso = document.getElementById("persona_inIngreso");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
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
        if (this.vista === null)
            return;
        this.inNombre.value = "";
        this.inIngreso.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vPersonaPlain.js.map