import { EnviosService } from './../../core/envios.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/core/clientes.service';
import { Envio } from 'src/app/clases/envio';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  public envios = [];

  constructor(private clientesService: ClientesService,
    private enviosService: EnviosService) {
     }

  ngOnInit() {
    this.getEnvios();
  }

  private getEnvios(){
    this.enviosService.getEnvios()
    .subscribe(data =>{
      this.envios = data;
    })
  }

  confirmar(envio: Envio){
    envio.confirmada = true;
    this.enviosService.updateEnvio(envio);
  }

}
