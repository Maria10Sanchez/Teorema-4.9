import { iArticulo } from "../interfaces/iArticulo.js";

export default class vArticuloPlain implements iArticulo {
  private inCodigo: HTMLInputElement;
  private inCosto: HTMLInputElement;
  private inPrecio: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inCodigo = document.getElementById("articulo_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.inPrecio = document.getElementById("articulo_inPrecio") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
  }

  get codigo(): number {
    return this.inCodigo ? +this.inCodigo.value : 0;
  }
  get costo(): number {
    return this.inCosto ? +this.inCosto.value : 0;
  }
  get precio(): number {
    return this.inPrecio ? +this.inPrecio.value : 0;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.inCodigo.value = "";
    this.inCosto.value = "";
    this.inPrecio.value = "";
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
