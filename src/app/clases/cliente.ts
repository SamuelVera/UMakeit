import { Plato } from "./plato";

export interface Cliente{
    id ?: string; 
    email: string; //Nombre del usuario
    displayName ?: string; //Correo electrónico
    cedula ?: string; //Número de cédula
    telefono ?: string; //Número de teléfono
    direccion ?: string;
    ordenes ?: [ //Arreglo de platos
        {
            plato: Plato;
        }
    ]
    admin ?: boolean;
}