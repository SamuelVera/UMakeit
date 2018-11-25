export interface Plato{
    id ?: string;
    nombre ?: string;
    precio ?: number;
    personal ?: boolean;
    activo ?: boolean;
    image ?: string;
    contornos ?: [
        {
            nombre: string;
            carga: number;
            elegido: boolean;
        }
    ]
}