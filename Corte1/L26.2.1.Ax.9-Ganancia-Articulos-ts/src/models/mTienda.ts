import mArticulo from "./mArticulo.js";

export default class mTienda {
  private acumGanancia: number = 0;
  private mayPrecio: number = 0;
  private codMayor: number = 0;

  constructor() {
    this.acumGanancia = 0;
    this.mayPrecio = 0;
    this.codMayor = 0;
  }

  procesarArticulo(a: mArticulo): void {
    // 1. Acumular ganancia de cada articulo
    this.acumGanancia += a.ganancia;

    // 2. Determinar el codigo del articulo con mayor precio de venta
    if (a.precio > this.mayPrecio) {
      this.mayPrecio = a.precio;
      this.codMayor = a.codigo;
    }
  }

  gananciaTotal(): number {
    return this.acumGanancia;
  }

  codigoMayorPrecio(): number {
    return this.codMayor;
  }
}
