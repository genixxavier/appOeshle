import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from "../models/clienteInterface";
import { ClienteService } from "../services/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ClienteInterface[]
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe( clientes => {
      this.clientes = clientes
    })
  }

  deleteCliente(event,cliente:ClienteInterface){
    this.clienteService.deleteCliente(cliente)
  }

}
