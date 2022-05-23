import { ICategoria } from './ICategoria';

export interface IProducto {
    _id: string;
    categoria: ICategoria;
    nombre: string;
    descripcion: string | null;
    precio: number;
    stock: number;
    imagenUrl: string;
    fechaRegistro: string;
    estado: string;
}
