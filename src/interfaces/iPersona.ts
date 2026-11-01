//Interfaz de Persona (Clase menor)
export interface iPersona {
    get nombre():string;
    get ingreso():number;

    mostrar():void;
    ocultar():void;

    onAceptar(callback:() => void):void;
    onCancelar(callback:() => void):void;
}