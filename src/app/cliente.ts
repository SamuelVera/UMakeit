import { Plato } from "./plato";

export class Cliente{
    id ?: String; 
    username ?: String; //Nombre del usuario
    password ?: String; //Password
    Orden ?: [ //Arreglo de platos
        {
            plato: Plato;
        }
    ]
}