export interface iTienda {
  onNuevoArticulo(callback: () => void): void;
  reportar({
    gananciaTotal,
    codigoMayorPrecio,
  }: {
    gananciaTotal: number;
    codigoMayorPrecio: number;
  }): void;
}
