import { AuthService } from './../../core/auth.service';
import { Component, OnInit} from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user: Cliente;

  constructor(private auth: AuthService) { 
    
  }

  ngOnInit() {
  }
}
