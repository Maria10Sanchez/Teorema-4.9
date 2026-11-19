import { iTienda } from "../interfaces/iTienda.js";

export default class vTiendaBootstrap implements iTienda {
  private lblGananciaTotal: HTMLElement;
  private lblCodigoMayorPrecio: HTMLElement;
  private btNuevoArticulo: HTMLButtonElement;

  constructor() {
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGananciaTotal = document.getElementById("body_lblGananciaTotal") as HTMLElement;
    this.lblCodigoMayorPrecio = document.getElementById("body_lblCodigoMayorPrecio") as HTMLElement;
  }

  onNuevoArticulo(callback: () => void): void {
    this.btNuevoArticulo.onclick = callback;
  }

  reportar({
    gananciaTotal,
    codigoMayorPrecio,
  }: {
    gananciaTotal: number;
    codigoMayorPrecio: number;
  }): void {
    this.lblGananciaTotal.innerHTML = `${gananciaTotal}$`;
    this.lblCodigoMayorPrecio.innerHTML = `${codigoMayorPrecio}`;
  }
}
