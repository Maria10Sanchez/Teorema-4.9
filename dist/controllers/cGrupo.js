//Controlador de Grupo (Clase Mayor)
import mGrupo from "../models/mGrupo.js";
export default class cGrupo {
    mGrupo = new mGrupo();
    vGrupo;
    cPersona;
    constructor(vistaGrupo, controladorPersona) {
        this.vGrupo = vistaGrupo;
        this.cPersona = controladorPersona;
        this.vGrupo.onNuevaPersona(() => this.procesar1Persona());
    }
    procesar1Persona() {
        this.cPersona.solicitarPersona((persona) => {
            if (persona !== null) {
                this.mGrupo.procesarPersona(persona);
                this.vGrupo.reportar({ calcularPromedio: this.mGrupo.calcularPromedio(),
                    obtenerIngresoMenor: this.mGrupo.obtenerIngresoMenor() });
            }
        });
    }
}
//# sourceMappingURL=cGrupo.js.map