//Interfaz de Estudiante (Clase menor)
export interface iEstudiante {
    get cedula():number;
    get notaFinal():number;

    //Controlan cuándo se ve o se oculta el formulario del estudiante
    mostrar():void;
    ocultar():void;

    //Maneja eventos de botones para avisar al controlador cuando se da en aceptar o cancelar
    onAceptar(callback:() => void):void; 
    onCancelar(callback:() => void):void;
}