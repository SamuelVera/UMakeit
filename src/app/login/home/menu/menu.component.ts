import { EnviosService } from './../../../core/envios.service';
import { ClientesService } from './../../../core/clientes.service';
import { AuthService } from './../../../core/auth.service';
import { Plato } from 'src/app/clases/plato';
import { Cliente } from './../../../clases/cliente';
import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { Envio } from 'src/app/clases/envio';
import { PayPalConfig } from 'ngx-paypal';

declare let paypal: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewChecked{

  public platos = [];
  campoText: string = '';
  public payPalConfig?: PayPalConfig;
  
  public envio: Envio = {
    id: '',
    owner_ref: '',
    precio: 0,
    fecha: new Date(),
    platos:[],
    direccion: '',
    confirmada: false,
    telefono: 0,
    cedula: 0
  };

  aux: string;
  ordena: Cliente;

  addScript: boolean = false;
  paypalLoad: boolean = true;

  paypalConfig = {
    env:'sandbox',
    client:{
      sandbox: 'AZLQoirNWCHZM05je0pi0cPrKTmL9XJmfVVzpa5SducLULNI91Ii0AOxQt9BNeWWLAMblzOM-JDVwCIR',
      production: '<insert-production-client-id>'
    },
    commit: true,
    payment: (data, actions)=>{
      return actions.payment.create({
        payment:{
          transactions: [{
            amount: { total: this.envio.precio, currency: 'USD' }
          }]
        }
      });
    },
    onAuthorize: (data, actions)=>{
      this.envio.owner_ref = "clientes/"+this.ordena.id;
      this.envio.direccion = this.ordena.direccion;
      this.envio.telefono = this.ordena.telefono;
      this.envio.cedula = this.ordena.cedula;
      this.envio.fecha = new Date();
      const id = this.enviosService.addEnvio(this.envio);
      this.ordena.envios.push(id);
      this.clientesService.updateCliente(this.ordena);
      this.envio.platos = [];
    }
  };

  constructor(private platoService: PlatoService,
    private authService: AuthService,
    private clientesService: ClientesService,
    private enviosService: EnviosService) { }

  ngOnInit() {
    this.getPlatos();
    this.clientesService.getCliente(this.authService.uid)
      .subscribe(data => {
      this.ordena = data[0];
      console.log("Cliente fetched");
    });
  }

  ngAfterViewChecked(){
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '#paypal-button-container');
        this.paypalLoad = false;
      })
    }
  }

  private addPaypalScript(){
    if(!this.addScript){
      this.addScript = true;
      return new Promise((resolve, reject)=>{
        let scripttagElement = document.createElement('script');
        scripttagElement.src='https://www.paypalobjects.com/api/checkout.js';
        scripttagElement.onload = resolve;
        document.body.appendChild(scripttagElement);
      })
    }
  }

  getPlatos(){
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

  search(e){
    var aux = this.campoText.toLowerCase();
    this.platoService.searchPlatos(aux)
    .subscribe(data  => {
      this.platos = data;
    });
  }

    //Agregar plato a la orden
  agregar(plato: Plato){
    this.envio.platos.push(plato);
    this.calcPrecio();
  }

    //Eliminar plato de la orden
  eliminar(i: number){
    this.envio.platos.splice(i,1);
    this.calcPrecio();
  }

  private calcPrecio(){
    var i = 0;
    var j;
    this.envio.precio = 0;
    while(i < this.envio.platos.length){
      this.envio.precio += this.envio.platos[i].precio; // Precio del plato
      j = 0;
      while(j < this.envio.platos[i].contornos.length){
        if(this.envio.platos[i].contornos[j].elegido){
          this.envio.precio += this.envio.platos[i].contornos[j].carga; //Precio del añadido
        }
        j++;
      }
      i++;
    }
  }

  select(contorno){
    contorno.elegido = !contorno.elegido;
    this.calcPrecio();
  }

}
