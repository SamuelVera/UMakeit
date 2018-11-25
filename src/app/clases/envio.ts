import { Plato } from './plato';

export interface Envio{
    id ?: string,
    owner_ref: string,
    fecha ?: Date,
    precio ?: number,
    platos: Plato[],
    direccion: string,
    confirmada: boolean,
    telefono: number,
    cedula: number
}