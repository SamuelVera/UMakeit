import { Plato } from './plato';
import { Cliente } from "./cliente";

export interface Envio{
    id ?: String;
    owner ?: Cliente;
    fecha ?: Date;
    platos ?: [
        Plato
    ]
}