import { Envio } from './envio';

export interface Cliente{

    id ?: string; 
    email: string; //Nombre del usuario
    displayName ?: string; //Correo electrónico
    cedula ?: string; //Número de cédula
    telefono ?: string; //Número de teléfono
    direccion ?: string;
    envios ?: Envio[];
    admin ?: boolean;
}