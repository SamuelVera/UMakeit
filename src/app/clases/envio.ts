import { Cliente } from './cliente';
import { Plato } from './plato';

export interface Envio{
    id ?: string;
    owner: Cliente,
    fecha ?: Date,
    platos: Plato[],
    confirmada: boolean
}