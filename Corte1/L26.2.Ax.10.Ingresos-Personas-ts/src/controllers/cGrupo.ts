//Controlador de Grupo (Clase Mayor)
import mGrupo from "../models/mGrupo.js";
import { iGrupo } from "../interfaces/iGrupo.js";
import cPersona from "./cPersona.js";

export default class cGrupo {
    private mGrupo: mGrupo = new mGrupo();
    private vGrupo: iGrupo;
    private cPersona: cPersona;

    constructor(vistaGrupo: iGrupo, controladorPersona: cPersona) {
        this.vGrupo = vistaGrupo;
        this.cPersona = controladorPersona;

        this.vGrupo.onNuevaPersona(() => this.procesar1Persona());
    }

    private procesar1Persona():void {
        this.cPersona.solicitarPersona((persona) => {
            if(persona !== null) {
                this.mGrupo.procesarPersona(persona);
                this.vGrupo.reportar({calcularPromedio: this.mGrupo.calcularPromedio(),
                    obtenerIngresoMenor: this.mGrupo.obtenerIngresoMenor()});
            }
        });
    }
}