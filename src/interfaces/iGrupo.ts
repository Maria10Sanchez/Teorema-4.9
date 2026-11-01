//Interfaz de Grupo (Clase Mayor)
export interface iGrupo {
    onNuevaPersona(callback:() => void):void;

    reportar({calcularPromedio, obtenerIngresoMenor}: {calcularPromedio:number, 
        obtenerIngresoMenor:number}):void;
}