//Interfaz de Delivery (Clase Mayor)
export interface iDelivery {
    onNuevoBici(callback:() => void):void;
    onNuevoMoto(callback:() => void):void;

    reportar({guia, montoEnvio, totalMoto, totalBici, promedioEnvio}:{guia:string, 
        montoEnvio:number, totalMoto:number,
        totalBici:number, promedioEnvio:number}):void;
}