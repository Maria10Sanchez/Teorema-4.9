//Interfaz Moto
export interface iMoto {
    get guia():string;
    get montoPedido():number;
    get kilometro():number;

    mostrar():void;
    ocultar():void;

    onAceptar(callback:() => void):void;
    onCancelar(callback:() => void):void;
}