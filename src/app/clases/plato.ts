export interface Plato{
    id ?: String;
    nombre ?: String;
    precio ?: number;
    personal ?: boolean;
    activo ?: boolean;
    image ?: String;
    contornos ?: [
        {
            nombre: String;
            carga: number;
        }
    ]
}