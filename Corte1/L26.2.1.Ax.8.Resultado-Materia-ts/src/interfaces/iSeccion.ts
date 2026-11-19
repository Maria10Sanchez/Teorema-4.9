//Interaz de Seccion (Clase Mayor)
export interface iSeccion {
    //Maneja el evento que avisa cuando se va a registrar o procesar un nuevo estudiante
    onNuevoEstudiante(callback:() => void):void;

    //Recibe los resultados calculados por el modelo para mostrarlos
    reportar({notaPromedio, estudiantesAprobados, estudiantesReprobados}: {notaPromedio:number,
         estudiantesAprobados:number, estudiantesReprobados:number}):void
}