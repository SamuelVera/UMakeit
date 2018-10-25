import { Plato } from "./plato";

export class Cliente{
    uid ?: string; 
    email: string; //Nombre del usuario
    displayName ?: string; //Correo electrónico
    cedula ?: number; //Número de cédula
    password ?: string; //Password
    telefono ?: number;
    direcciones ?:[ //Direcciones de envío de los platos 
        string
    ]
    ordenes ?: [ //Arreglo de platos
        {
            plato: Plato;
        }
    ]
}