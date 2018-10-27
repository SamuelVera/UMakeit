import { Plato } from "./plato";

export interface Cliente{
    id ?: string; 
    email: string; //Nombre del usuario
    displayName ?: string; //Correo electrónico
    cedula ?: string; //Número de cédula
    password ?: string; //Password
    telefono ?: string; //Número de teléfono
    direcciones ?:[ //Direcciones del cliente
        {
            direccion: string;
        }
    ]
    ordenes ?: [ //Arreglo de platos
        {
            plato: Plato;
        }
    ]
}