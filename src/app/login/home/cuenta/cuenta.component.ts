import { Observable } from 'rxjs';
import { Cliente } from './../../../clases/cliente';
import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/core/clientes.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  public cliente: Cliente;
  private aux: Observable<Cliente[]>;
  private email: string;

  constructor(public auth: AuthService,
    private clientesService: ClientesService) { }

  ngOnInit() {
    this.auth.uid.subscribe(data => {
      this.email = data;
      console.log(this.email);
      this.aux = this.clientesService.getCliente(this.email) as Observable<Cliente[]>;
      console.log(this.aux);
      this.aux.subscribe(data =>{
        this.cliente = data[0];
      })
    });
  }
}


