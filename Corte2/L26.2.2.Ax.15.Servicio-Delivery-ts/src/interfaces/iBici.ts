//Interfaz Bici
export interface iBici {
    get guia():string;
    get montoPedido():number;
    get bolsaTerm():boolean;
    get horaPico():boolean;

    mostrar():void;
    ocultar():void;

    onAceptar(callback:() => void):void;
    onCancelar(callback:() => void):void;
}