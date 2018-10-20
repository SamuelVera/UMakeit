import { Plato } from 'src/app/plato';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
    const platos = [
            {
                nombre: "Papas", id: 1, 
                precio: 20, personal: true,
                activo: true, image: "src",
                contornos:[
                    {
                        nombre: "Salsa",
                        carga: 10
                    }
                ]
            },
            {
                nombre: "Marinada", id: 2,
                precio: 15, personal: false,
                activo: true, image: "src",
                contornos:[
                    {
                        nombre: "",
                        carga: 0
                    }
                ]
            }
        ]
        return {platos};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the platos array is empty,
    // the method below returns the initial number (1).
    // if the platos array is not empty, the method below returns the highest
    // plato id + 1.
  genId(plato: Plato[]): number {
    return plato.length > 0 ? Math.max(...plato.map(plato => plato.id)) + 1 : 1;
  }
}