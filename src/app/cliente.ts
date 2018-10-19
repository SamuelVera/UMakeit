import { Plato } from "./plato";

export class Cliente{
    username: String; //Nombre del usuario
    password: String; //Password
    Orden: [ //Arreglo de platos
        {
            plato: Plato;
        }
    ]
}