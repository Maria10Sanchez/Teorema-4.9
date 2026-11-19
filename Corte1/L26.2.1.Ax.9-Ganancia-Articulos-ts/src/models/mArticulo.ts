export default class mArticulo {
  private _codigo: number = 0;
  private _costo: number = 0;
  private _precio: number = 0;

  constructor({
    codigo,
    costo,
    precio,
  }: {
    codigo: number;
    costo: number;
    precio: number;
  }) {
    this.codigo = codigo;
    this.costo = costo;
    this.precio = precio;
  }

  set codigo(codigo: number) {
    this._codigo = +codigo;
  }
  get codigo(): number {
    return this._codigo;
  }

  set costo(costo: number) {
    this._costo = +costo;
  }
  get costo(): number {
    return this._costo;
  }

  set precio(precio: number) {
    this._precio = +precio;
  }
  get precio(): number {
    return this._precio;
  }

  get ganancia(): number {
    return this.precio - this.costo;
  }
}
