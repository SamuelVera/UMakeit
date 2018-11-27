import { Envio } from './envio';

export interface Cliente{

    id ?: string; 
    email: string; //Nombre del usuario
    displayName ?: string; //Correo electrónico
    cedula ?: number; //Número de cédula
    telefono ?: number; //Número de teléfono
    dir ?: string;
    envios ?: string[];
    admin ?: boolean;
}